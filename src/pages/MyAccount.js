import '../components/MyAccount/MyAccount.css'

import AccountDetailsContainer from "../components/MyAccount/AccountDetailsContainer";
import Orders from "../components/MyAccount/Orders";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from "react";

function TabPanel(props) {

    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ pt: 2, pl: 3, pr: 3 , pb: 3 }}>
                {children}
          </Box>
        )}
      </div>
    );
}

  
function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
}
  
const MyAccount = () => {

    const [value, setValue] = useState(0);
    const handleChange      = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <>
            <div className="main-content container">
                <h1 className="heading">Mi cuenta</h1>
                <Box
                    sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
                    >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Mi cuenta"
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        <Tab label="Datos personales" {...a11yProps(0)} />
                        <Tab label="Mis pedidos" {...a11yProps(1)} />
                    </Tabs>
                    <TabPanel value={value} index={0} className="flex-grow-1">
                        <AccountDetailsContainer />
                    </TabPanel>
                    <TabPanel value={value} index={1} className="flex-grow-1">
                        <Orders />
                    </TabPanel>
                </Box>
            </div>
        </>
    )
}

export default MyAccount;