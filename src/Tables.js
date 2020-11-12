import React from 'react'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import './Tables.css'

const Tables = ({data}) => {

    function createData(name, position, position_out_of, deviation ) {
      return { name, position, position_out_of, deviation };
    }

    function createDataMean(name, avarage_score, deviation) {
      return { name, avarage_score, deviation };
    }

    const rows = [
      createData(
        "Overall position",
        data.overall_position.position,
        data.overall_position.position_out_of,
        data.overall_position.deviation
      ),
      createData(
        "stream position",
        data.stream_position.position,
        data.stream_position.position_out_of,
        data.stream_position.deviation
      ),
    ];
     const row = [
       createDataMean(
         "Mean Marks",
         data.mean_marks.avg_score,
         data.mean_marks.deviation,
         
       ),
      
     ];
    return (
      <div className="table">
        <TableContainer className="table__container" component={Paper}>
          <Table className="table__simple" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">Position</TableCell>
                <TableCell align="right">Position out of</TableCell>
                <TableCell align="right">Deviation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.position}</TableCell>
                  <TableCell align="right">{row.position_out_of}</TableCell>
                  <TableCell align="right">{row.deviation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer className="table__container1" component={Paper}>
          <Table className="table__simple" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">Average score </TableCell>
                <TableCell align="right">Deviation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {row.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.avarage_score}</TableCell>
                  <TableCell align="right">{row.deviation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
}

export default Tables
