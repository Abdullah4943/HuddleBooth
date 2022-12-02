import React from "react";
import { adminContext } from "../Contexts/Providers/AdminProvider";
import Textarea from "@mui/joy/Textarea";
import { Box, Button, Typography, Modal, Chip, styled } from "@mui/material";
import useAddChallenges from "../Hooks/useAddChallenges";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "#f9c712",
  boxShadow: 24,
  p: 4,
  color: "#303030",
  borderRadius: 9,
};

const styleLeftBox = {
  width: "50%",
  display: "flex",
  flexDirection: "column",
};

const styleRightBox = {
  width: "40%",
  display: "flex",
  flexDirection: "column",
  mt: 3,
};

const styleMainBox = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
};

const styleButton = {
  textTransform: "none",
  color: "#f9c712",
  backgroundColor: "#303030",
  m: 1,
  "&.MuiButtonBase-root:hover": {
    bgcolor: "black",
  },
};

const styleTypography = {
  display: "flex",
  justifyContent: "center",
  mb: 2,
  mt: -2,
  fontWeight: "bold",
};

const AddChallengeModal = (props: any) => {
  const { AddChallenges } = useAddChallenges();
  const [challengeName, setChallengeName] = React.useState<string>("");
  const [challengeDescription, setChallengeDescription] =
    React.useState<string>("");
  const [challengeTag, setChallengeTag] = React.useState<any>([]);
  const [challengeImage, setChallengeImage] = React.useState<any>(null);
  const [PreviewImage, setPreviewImage] = React.useState<string>("");
  const inputRef = React.createRef<HTMLInputElement>();
  const handleClose = () => props.setOpen(false);
  const handleAddTag = (e: any) => {
    if (e.key === "Enter") {
      setChallengeTag([...challengeTag, e.target.value]);
    }
  };

  const handleDelete = (index: any) => () => {
    setChallengeTag(challengeTag.filter((el: any, i: any) => i !== index));
  };

  const handleChange = (e: any) => {
    setChallengeImage(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleClickModal = () => {
    AddChallenges(
      challengeName,
      challengeDescription,
      challengeImage,
      challengeTag
    ); 
    props.setOpen(false);
  };
  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" sx={styleTypography}>
            Add Challenge
          </Typography>
          <Box sx={styleMainBox}>
            <Box sx={styleLeftBox}>
              <Textarea
                sx={{ m: 2 }}
                placeholder="Challenge Name"
                onChange={(e) => {
                  setChallengeName(e.target.value);
                }}
              />
              <Textarea
                sx={{ m: 2 }}
                placeholder="Description"
                onChange={(e) => {
                  setChallengeDescription(e.target.value);
                }}
              />

              <Textarea
                ref={inputRef}
                sx={{ m: 2 }}
                placeholder="Tags"
                onKeyDown={handleAddTag}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  listStyle: "none",
                  p: 0.5,
                  m: 0,
                }}
                component="ul"
              >
                {challengeTag.map((data: any, index: number) => {
                  return (
                    <ListItem>
                      <Chip label={data} onDelete={handleDelete(index)} />
                    </ListItem>
                  );
                })}
              </Box>
            </Box>
            <Box sx={styleRightBox}>
              <input
                accept="image/*"
                multiple
                type="file"
                onChange={handleChange}
              />

              <img src={PreviewImage} width="auto" height="auto" alt=""></img>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button variant="contained" onClick={handleClose} sx={styleButton}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleClickModal}
              sx={styleButton}
            >
              Challenge!
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddChallengeModal;
