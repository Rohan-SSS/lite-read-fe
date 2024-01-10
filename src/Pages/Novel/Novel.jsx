import { Info } from "@mui/icons-material";
import { Button, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Novel.css";

const Novel = () => {
  const { title } = useParams();
  const [novelData, setNovelData] = useState();

  useEffect(() => {
    const fetchNovels = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/novel/${title}`);
        if (!response.ok) {
          throw new Error("Error 404");
        }
        const data = await response.json();
        setNovelData(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchNovels();
  }, [title]);

  return (
    <div className="foo-novel">
      {novelData && (
        <div className="novel">
          <div className="data">
            <div className="title">
              <h2>{novelData.title}</h2>
            </div>
            <div className="img-info">
              <div className="img">
                <img
                  src={novelData.imageURL}
                  alt={novelData.title}
                  width="240"
                  height="360"
                />
                <div className="mal">
                  <Button
                    variant="outlined"
                    href={novelData.malLink}
                    size="medium"
                    startIcon={<Info />}
                    sx={{
                      color: "#fff",
                      border: "1px solid #ddd",
                      backgroundColor: "#212121",
                      "&:hover": {
                        backgroundColor: "#161616",
                        border: "1px solid #666",
                        color: "#aaa",
                      },
                    }}
                  >
                    Read more
                  </Button>
                </div>
              </div>
              <div className="info">
                <div className="genre">
                  <strong>{"Genre:"}</strong>
                  <p>{novelData.genre}</p>
                </div>
                <Divider sx={{ my: 2, borderColor: "#999" }} />
                <div className="synopsis">
                  <strong>Synopsis:</strong>

                  <p style={{ whiteSpace: "pre-line" }}>{novelData.synopsis}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="volumes">
            <div className="volumes-heading">
              <Typography
                variant="h5"
                letterSpacing="0.1rem"
                marginLeft="1.5vh"
                fontWeight="500"
                gutterBottom
              >
                VOLUMES
              </Typography>
            </div>
            <Divider sx={{ my: 1, borderColor: "#222", marginBottom: 4 }} />
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              {Array.from({ length: novelData.noOfVolumes }, (_, index) => (
                <Grid item key={index}>
                  <Link
                    to={`/${title}/${index + 1}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="outlined"
                      size="medium"
                      color="primary"
                      sx={{
                        color: "#fff",
                        border: "1px solid #666",
                        backgroundColor: "#212121",
                        "&:hover": {
                          backgroundColor: "#161616",
                          border: "1px solid #666",
                          color: "#aaa",
                        },
                        width: "120px",
                        height: "40px",
                      }}
                    >
                      Volume {index + 1}
                    </Button>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
};

export default Novel;
