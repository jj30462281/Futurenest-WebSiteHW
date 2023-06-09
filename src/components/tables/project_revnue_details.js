import React from "react";
import { Table, TableContainer } from "./styled_table";
function Project_revnue_details() {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <td>project name</td>
            <td>Project category</td>
            <td>expenditure item</td>
            <td>payment object</td>
            <td>Amount of money</td>
            <td>Financial work progress</td>
            <td>Estimated payment date</td>
            <td>Actual payment date</td>
            <td>Remark</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DVS Journey Mapping Workshop</td>
            <td>Kathryn Murphy</td>
            <td>May 31, 2015</td>
            <td>March 6, 2018</td>
            <td>$106.58</td>
            <td>invoiced</td>
            <td>2464 Royal Ln. Mesa, New Jersey 45463</td>
            <td>May 6, 2012</td>
            <td>Rejected</td>
          </tr>
          <tr>
            <td>Shelter Enhancements</td>
            <td>Cameron Williamson</td>
            <td>February 9, 2015</td>
            <td>May 6, 2012</td>
            <td>$450.54</td>
            <td>paid for</td>
            <td>3891 Ranchview Dr. Richardson, California 62639</td>
            <td>August 24, 2013</td>
            <td>Draft</td>
          </tr>
          <tr>
            <td>Pathways to Prevention</td>
            <td>Jacob Jones</td>
            <td>May 12, 2019</td>
            <td>August 2, 2013</td>
            <td>$601.13</td>
            <td>paid for</td>
            <td>4517 Washington Ave. Manchester, Kentucky 39495</td>
            <td>November 16, 2014</td>
            <td>Rejected</td>
          </tr>
          <tr>
            <td>Queensbridge Connected</td>
            <td>Eleanor Pena</td>
            <td>July 14, 2015</td>
            <td>September 24, 2017</td>
            <td>$219.78</td>
            <td>invoiced</td>
            <td>6391 Elgin St. Celina, Delaware 10299</td>
            <td>May 12, 2019</td>
            <td>In Query</td>
          </tr>
          <tr>
            <td>Tech Talent Financing Program Design Workshops</td>
            <td>Theresa Webb</td>
            <td>April 28, 2016</td>
            <td>May 31, 2015</td>
            <td>$779.58</td>
            <td>invoiced</td>
            <td>3517 W. Gray St. Utica, Pennsylvania 57867</td>
            <td>March 23, 2013</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>PACT public housing conversions</td>
            <td>Floyd Miles</td>
            <td>November 7, 2017</td>
            <td>October 30, 2017</td>
            <td>$293.01</td>
            <td>paid for</td>
            <td>1901 Thornridge Cir. Shiloh, Hawaii 81063</td>
            <td>April 28, 2016</td>
            <td>In Query</td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
}
export default Project_revnue_details;
