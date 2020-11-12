import React from 'react'
import './StudentResults.css'
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CountUp from "react-countup";


const StyledTableCell = withStyles((theme) => ({
  head: {
    
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const StudentResults = ({data}) => {
    
  const subject_results=data.subject_results;

   
 
    return (
      <div className="studentresult">
        <TableContainer className="studentresults" component={Paper}>
          <Table
            className="studentresults__table"
            aria-label="customized table"
          >
            <TableHead>
              <TableRow className="studentresults__tableRow">
                <StyledTableCell align="right">Subject name</StyledTableCell>
                <StyledTableCell align="right">Grade</StyledTableCell>
                <StyledTableCell align="right">Score</StyledTableCell>
                <StyledTableCell align="right">Rank</StyledTableCell>
                <StyledTableCell align="right">Rank out of</StyledTableCell>
                <StyledTableCell align="right">Deviation</StyledTableCell>
                <StyledTableCell align="right">Comment</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subject_results.map((item, row) => (
                <StyledTableRow key={row}>
                  <StyledTableCell component="th" scope="row">
                   {item.subject_name}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                   {item.grade}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <CountUp
                      start={0}
                      end={item.score}
                      duration={2.5}
                      separator=","
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <CountUp
                      start={0}
                      end={item.rank}
                      duration={2.5}
                      separator=","
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <CountUp
                      start={0}
                      end={item.rank_out_of}
                      duration={2.5}
                      separator=","
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <CountUp
                      start={0}
                      end={item.deviation}
                      duration={2.5}
                      separator=","
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.comment}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <h2>bar chart</h2>
      </div>
    );
}

export default StudentResults
