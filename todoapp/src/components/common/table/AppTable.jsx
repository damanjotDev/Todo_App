import { Box, styled } from "@mui/material";
import PaginationTable from "./PaginationTable";
import SimpleCard from "../components/SimpleCard";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

export const AppTable = () => {
  return (
    <Container>
      <SimpleCard title="Pagination Table">
        <PaginationTable />
      </SimpleCard>
    </Container>
  );
};
