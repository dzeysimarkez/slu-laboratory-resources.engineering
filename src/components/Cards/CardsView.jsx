import React, { useState } from "react";

import { Box, Grid, Typography, Pagination, Stack } from "@mui/material"; // Import Box, Grid, and Typography
import MultiActionAreaCard from "./MultiActionAreaCard"; // Adjust path if your card is in a different folder

import eimg from "../../assets/equipment.jpg"
export default function CardsView() {
  //equipmentName, shortDesc, equipmentImage, itemCount

  const cardData = [
      {
    equipmentImage: eimg,
    equipmentName: "ERP System Dashboard",
    description: "Real-time overview of enterprise resource planning metrics, including finance, HR, and supply chain operations.",
    itemCount: 1543, // Example count: Number of active transactions or reports
  },
  {
    equipmentImage: eimg,
    equipmentName: "CRM Sales Funnel",
    description: "Track customer relationship management activities and visualize sales pipeline stages for all active leads.",
    itemCount: 87, // Example count: Number of active leads in the funnel
  },
  {
    equipmentImage: eimg,
    equipmentName: "Cloud Server Status",
    description: "Monitor the health and performance of all deployed cloud servers across different regions and environments.",
    itemCount: 12, // Example count: Number of active cloud servers
  },
  {
    equipmentImage: eimg,
    equipmentName: "Network Traffic Analytics",
    description: "Analyze incoming and outgoing network traffic patterns, identify bottlenecks, and detect anomalies.",
    itemCount: 23512, // Example count: Number of data packets processed in a period
  },
  {
    equipmentImage: eimg,
    equipmentName: "Database Query Log",
    description: "Review detailed logs of all database queries, including execution times and user origins, for performance tuning.",
    itemCount: 4567, // Example count: Number of queries logged today
  },
  {
    equipmentImage: eimg,
    equipmentName: "IoT Device Telemetry",
    description: "Access live data streams from connected IoT devices, including sensor readings and operational states.",
    itemCount: 28, // Example count: Number of active IoT devices
  },
  {
    equipmentImage: eimg,
    equipmentName: "Mobile App Performance",
    description: "Evaluate user experience and technical performance metrics for the mobile application across platforms.",
    itemCount: 98, // Example count: Percentage performance score
  },
  {
    equipmentImage: eimg,
    equipmentName: "Data Migration Progress",
    description: "Track the status of ongoing data migration projects, including completed, pending, and error records.",
    itemCount: 7890, // Example count: Number of records migrated
  },
  {
    equipmentImage: eimg,
    equipmentName: "Security Incident Report",
    description: "View and manage reported security incidents, analyze their impact, and track resolution efforts.",
    itemCount: 5, // Example count: Number of open incidents
  },
  {
    equipmentImage: eimg,
    equipmentName: "Automated Test Results",
    description: "Access comprehensive reports from the latest automated testing cycles, highlighting passed and failed tests.",
    itemCount: 124, // Example count: Number of tests executed
  },
  {
    equipmentImage: eimg,
    equipmentName: "CI/CD Pipeline History",
    description: "Examine the history of continuous integration/delivery pipeline runs, including build durations and deployment statuses.",
    itemCount: 34, // Example count: Number of recent pipeline runs
  },
  {
    equipmentImage: eimg,
    equipmentName: "User Access Control",
    description: "Manage user roles, permissions, and access levels across various internal systems and applications.",
    itemCount: 187, // Example count: Number of active users
  },
  {
    equipmentImage: eimg,
    equipmentName: "Hardware Inventory System",
    description: "Maintain an up-to-date record of all physical IT hardware assets, including location and specifications.",
    itemCount: 567, // Example count: Number of hardware items
  },
  {
    equipmentImage: eimg,
    equipmentName: "Software License Management",
    description: "Monitor software license usage, expiration dates, and compliance across the organization.",
    itemCount: 42, // Example count: Number of licenses expiring soon
  },
  {
    equipmentImage: eimg,
    equipmentName: "Virtual Machine Snapshots",
    description: "List and manage snapshots of virtual machines for backup and recovery purposes.",
    itemCount: 78, // Example count: Number of active snapshots
  },
  {
    equipmentImage: eimg,
    equipmentName: "HR Onboarding Workflow",
    description: "Track the progress of new employee onboarding tasks and document submissions.",
    itemCount: 11, // Example count: Number of new hires in onboarding
  },
  {
    equipmentImage: eimg,
    equipmentName: "Departmental Budget Overview",
    description: "Access a summary of current budget allocations, expenditures, and remaining funds by department.",
    itemCount: 15, // Example count: Number of active departments
  },
  {
    equipmentImage: eimg,
    equipmentName: "Supply Chain Logistics",
    description: "Monitor real-time status of goods in transit, warehouse inventory levels, and delivery schedules.",
    itemCount: 234, // Example count: Number of active shipments
  },
    // Add more card data to test pagination
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  //responsible for determining the total number of pages

  const totalPages = Math.ceil(cardData.length / itemPerPage);

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const displayCards = cardData.slice(startIndex, endIndex);

  //function for changing page
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {/* Added padding and flexGrow for layout */}
      <Typography variant="h4" gutterBottom>
        Equipments
      </Typography>
      <Grid container spacing={3}>
        {displayCards.map((card, index) => (
          // <Grid item xs={12} sm={6} md={4} key={index}>
          //   <MultiActionAreaCard
          //     equipmentImage={card.equipmentImage}
          //     equipmentName={card.equipmentName}
          //     description={card.description}
          //   />
          <Grid item size={4} key={index}>
            <MultiActionAreaCard
              equipmentImage={card.equipmentImage}
              equipmentName={card.equipmentName}
              description={card.description}
              itemCount={card.itemCount}
            />
          </Grid>
        ))}
      </Grid>

      {/*Pagination*/}
      <Stack spacing={2} sx={{ mt: 4, alignItems: "center" }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
        />
      </Stack>
    </Box>
  );
}
