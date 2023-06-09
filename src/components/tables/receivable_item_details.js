import React from "react";
import { Table, TableContainer } from "./styled_table";
function Accounts_payable() {
  return (
    <TableContainer>
      <h3>Receivable Item Details</h3>
      <hr />
      <Table>
        <thead>
          <tr>
            <td>invoice number</td>
            <td>object</td>
            <td>Product/Project</td>
            <td>Estimated payment date</td>
            <td>aging</td>
            <td>Amount of money</td>
            <td>Remark</td>
            <td>principal</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0000564854784</td>
            <td>Gekko & Co</td>
            <td>0000476548588</td>
            <td>2023/10/24</td>
            <td>30-60 days</td>
            <td>$98,769</td>
            <td>DA32 Notes payable due</td>
            <td>Ronald Richards</td>
          </tr>
          <tr>
            <td>0000564854784</td>
            <td>Genco Pura Olive Oil Company</td>
            <td>0000476548588</td>
            <td>2023/10/24</td>
            <td>&gt;120 days</td>
            <td>$44,698</td>
            <td>DA32 Notes payable due</td>
            <td>Ralph Edwards</td>
          </tr>
          <tr>
            <td>0000543648765</td>
            <td>Olivia Pope & Associates</td>
            <td>0000432643765</td>
            <td>2023/12/3</td>
            <td>90-120 days</td>
            <td>$54,756</td>
            <td>SP89 Accounts Payable Due</td>
            <td>Annette Black</td>
          </tr>
          <tr>
            <td>0000342648090</td>
            <td>Krusty Krab</td>
            <td>00000543264643</td>
            <td>2023/12/13</td>
            <td>60-90 days</td>
            <td>$35,531</td>
            <td>LH7 Notes payable due</td>
            <td>Jenny Wilson</td>
          </tr>
          <tr>
            <td>0000453758865</td>
            <td>Sterling Cooper</td>
            <td>0000987987642</td>
            <td>2023/12/23</td>
            <td>&lt;30days</td>
            <td>$68,162</td>
            <td>OK71 Accounts payable due</td>
            <td>Theresa Webb</td>
          </tr>
          <tr>
            <td>0000987097697</td>
            <td>Ollivander's Wand Shop</td>
            <td>0000987008697</td>
            <td>2023/12/30</td>
            <td>30-60 days</td>
            <td>$45,416</td>
            <td>RJ45 notes payable due</td>
            <td>Arlene McCoy</td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default Accounts_payable;
