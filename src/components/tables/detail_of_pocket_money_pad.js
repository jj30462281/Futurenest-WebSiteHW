import React from "react";
import { Table, TableContainer } from "./styled_table";
function Details_of_pockets() {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <td>Expense time</td>
            <td>Invoice acquisition time</td>
            <td>Receipt time of payer</td>
            <td>Substitute</td>
            <td>The payer has received the money</td>
            <td>category</td>
            <td>reason</td>
            <td>Amount of money</td>
            <td>Whether to hand over to an accountant</td>
            <td>Remark</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>March 13, 2014</td>
            <td>August 7, 2017</td>
            <td>December 19, 2013</td>
            <td>Brooklyn Simmons</td>
            <td>Yes</td>
            <td>Client payment</td>
            <td>Commit</td>
            <td>$767.50</td>
            <td>No</td>
            <td>Received</td>
          </tr>
          <tr>
            <td>October 24, 2018</td>
            <td>November 28, 2015</td>
            <td>February 11, 2014</td>
            <td>Dianne Russell</td>
            <td>No</td>
            <td>Invoice Omitted</td>
            <td>Omitted</td>
            <td>$105.55</td>
            <td>Yes</td>
            <td>Rejected</td>
          </tr>
          <tr>
            <td>February 9, 2015</td>
            <td>September 9, 2013</td>
            <td>November 7, 2017</td>
            <td>Devon Lane</td>
            <td>Yes</td>
            <td>Commissions</td>
            <td>Pipeline</td>
            <td>$928.41</td>
            <td>No</td>
            <td>Draft</td>
          </tr>
          <tr>
            <td>October 31, 2017</td>
            <td>February 28, 2018</td>
            <td>May 9, 2014</td>
            <td>Darlene Robertson</td>
            <td>Yes</td>
            <td>Invoice</td>
            <td>Closed</td>
            <td>$406.27</td>
            <td>No</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>September 24, 2017</td>
            <td>December 29, 2012</td>
            <td>May 20, 2015</td>
            <td>Arlene McCoy</td>
            <td>Yes</td>
            <td>Client payment</td>
            <td>Best Case</td>
            <td>$782.01</td>
            <td>No</td>
            <td>Received</td>
          </tr>
          <tr>
            <td>November 16, 2014</td>
            <td>May 6, 2012</td>
            <td>May 31, 2015</td>
            <td>Annette Black</td>
            <td>Yes</td>
            <td>Client payment</td>
            <td>Most Likely</td>
            <td>$739.65</td>
            <td>No</td>
            <td>In Query</td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
}
export default Details_of_pockets;
