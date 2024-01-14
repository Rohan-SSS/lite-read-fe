import { Button, Divider, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoryContext } from "../StoryProvider";
import "./Navigator.css";

const Navigator = () => {
  const { title, volume } = useParams();

  const [noOfChapters, setNoOfChapters] = useState(0);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const chapters = Array.from({ length: noOfChapters }, (_, i) => i + 1);

  useEffect(() => {
    const fetchChapterData = async () => {
      if (!volume) return;

      try {
        const response = await fetch(
          `http://127.0.0.1:8000/${title}/${volume}`
        );
        if (!response.ok) throw new Error("Failed to fetch chapter data");

        const volumeData = await response.json();
        setNoOfChapters(volumeData.noOfChapters);
      } catch (err) {
        console.error("Failed to fetch chapter data:", err);
      }
    };

    fetchChapterData();
  }, [title, volume]);

  const [noOfPages, setNoOfPages] = useState(0);
  const [selectedPage, setSelectedPage] = useState(1);
  const pages = Array.from({ length: noOfPages }, (_, i) => i + 1);

  useEffect(() => {
    const fetchPageData = async () => {
      if (!volume || !selectedChapter) return;

      try {
        const response = await fetch(
          `http://127.0.0.1:8000/${title}/${volume}/${selectedChapter}`
        );
        if (!response.ok) throw new Error("Failed to fetch page data");

        const chapterData = await response.json();
        setNoOfPages(chapterData.noOfPages);
        setSelectedPage(1);
      } catch (err) {
        console.error("Failed to fetch page data:", err);
      }
    };

    fetchPageData();
  }, [title, volume, selectedChapter]);

  const { changeStory } = useContext(StoryContext);

  useEffect(() => {
    changeStory(title, volume, selectedChapter, selectedPage);
  }, [title, volume, selectedChapter, selectedPage]);

  return (
    <div className="navigator">
      <div className="navigator-title">
        <Typography
          variant="h4"
          component="h3"
          className="navigator-title"
          sx={{ paddingLeft: "2%" }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{ paddingLeft: "2%", color: "#ddd", marginBottom: "4%" }}
        >
          Volume: {volume}
        </Typography>
      </div>

      <div className="chapter-section">
        <Typography variant="h6" sx={{ marginTop: "10%" }}>
          Chapter
        </Typography>
        <Divider sx={{ my: 2, borderColor: "#999" }} />
        <Grid container spacing={2}>
          {chapters.map((chapter) => (
            <Grid item key={chapter}>
              <Button
                variant={chapter === selectedChapter ? "contained" : "outlined"}
                sx={{
                  backgroundColor:
                    chapter === selectedChapter ? "#ff9843" : "#212121",
                  color: chapter === selectedChapter ? "#000" : "#fff",
                  border: "1px solid #ddd",
                  "&:hover": {
                    backgroundColor: "#ff9843",
                    border: "1px solid #000",
                    color: "#000",
                  },
                }}
                onClick={() => setSelectedChapter(chapter)}
              >
                {chapter}
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="page-section">
        <Typography variant="h6" sx={{ marginTop: "10%" }}>
          Page
        </Typography>
        <Divider sx={{ my: 2, borderColor: "#999" }} />
        <Grid container spacing={2}>
          {pages.map((page) => (
            <Grid item key={page}>
              <Button
                variant={page === selectedPage ? "contained" : "outlined"}
                sx={{
                  backgroundColor:
                    page === selectedPage ? "#ff9843" : "#212121",
                  color: "#fff",
                  border: "1px solid #ddd",
                  "&:hover": {
                    backgroundColor: "#ff9843",
                    border: "1px solid #000",
                    color: "#000",
                  },
                }}
                onClick={() => setSelectedPage(page)}
              >
                {page}
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Navigator;
