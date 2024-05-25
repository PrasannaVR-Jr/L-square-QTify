import * as React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import CorouselView from "./Corousel";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function GenreTabs({songs=null}) {
  const [value, setValue] = React.useState(0);
  const [genres, setGenres] = React.useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    axios.get("https://qtify-backend-labs.crio.do/genres").then((response) => {
      setGenres(response.data.data);
    });
  }, []);

  const genreTabs = genres.map((obj) => {
    return obj.label;
  });

  const TabContent = () => {
    let index = 1;
    const items = genreTabs.map((genre) => (
      <Tab
        sx={{
          color: "white",
          textTransform: "capitalize",
          "&.Mui-selected": { color: "#01b59a" },
        }}
        label={genre}
        {...a11yProps(index++)}
      />
    ));

    return (
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{ style: { backgroundColor: "#01b59a" } }}
      >
        <Tab
          sx={{
            color: "white   ",
            textTransform: "capitalize",
            "&.Mui-selected": { color: "#01b59a" },
          }}
          label="All"
          {...a11yProps(index++)}
        />
        {items}
      </Tabs>
    );
  };

  const PanelContent = (
    <div>
      <CustomTabPanel value={value} index={0}>
        <CorouselView objects={songs} isSongSection={true}/>
      </CustomTabPanel>

      {genres.map((obj, index) => (
        <CustomTabPanel value={value} index={index + 1}>
            <CorouselView objects={songs} isSongSection={true} filter={obj.key}/>
        </CustomTabPanel>
      ))}
    </div>
  );

  return (
    <Box sx={{ width: "100%" }}>
      {console.log(genreTabs)}
      <Box sx={{ borderBottom: 1, borderColor: "transparent" }}>
        <TabContent />
      </Box>
      {PanelContent}
    </Box>
  );
}
export default GenreTabs;