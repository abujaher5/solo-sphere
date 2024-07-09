import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";

const TabCategories = ({ jobs }) => {
  return (
    <div className=" container px-4 py-10 mx-auto">
      <div className="space-y-4 my-6">
        <h1 className="text-2xl lg:text-3xl text-gray-500 font-semibold text-center">
          Brows Jobs By Categories
        </h1>
        <p className="m-w-2xl text-center text-gray-500">
          Three categories available for the time being.They are Web Development
          ,Graphics Design and Digital Marketing.Browse them by clicking on the
          tabs below.
        </p>
      </div>
      <Tabs>
        <div className="flex items-center justify-center">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-4">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job}></JobCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCategories;
