import React from 'react';
import NavBar from './NavBar'; 
import './Report.css';

function Report() {
  return (
    <div>
    <NavBar/>
      <h1>Report Page</h1>
      <table>
  <tr>
    <th>Vulnerability</th>
    <th>Description</th>
    <th>Suggestion</th>
  </tr>
  <tr>
  {/* Each row in the table represents a vulnerability */}
    <td>Reentrancy</td>
    <td>This vulnerability occurs when a contract calls an external contract, and the external contract calls back into the original contract before the first call completes. This can lead to unexpected behavior and potentially allow an attacker to steal funds.</td>
    <td>Use the "checks-effects-interactions" pattern. Ensure that you update your contract's state before making any external calls, and make use of the "withdraw pattern" to transfer funds securely.</td>
  </tr>
  <tr>
    <td>Integer Overflow/Underflow</td>
    <td>Integer overflow or underflow can happen when performing arithmetic operations on integers. If an overflow occurs, it can lead to unexpected results, potentially allowing an attacker to manipulate contract behavior.</td>
    <td>Use the SafeMath library or similar safe arithmetic libraries to prevent integer overflow/underflow. These libraries provide functions that check for overflows and underflows before performing operations.</td>
  </tr>
  <tr>
    <td>Unchecked External Calls</td>
    <td>When making external contract calls, it's crucial to check the return value and handle any potential errors. Failing to do so can result in unexpected behavior.</td>
    <td>Always check the return value of external calls using require, revert, or similar constructs. Ensure that your contract gracefully handles errors and provides appropriate feedback to users.</td>
  </tr>
  <tr>
    <td>Access Control Issues</td>
    <td>Contracts may have functions or data that should only be accessible to certain addresses or roles. Access control vulnerabilities can occur when these checks are not properly implemented.</td>
    <td>Implement access control using modifiers or access control libraries like OpenZeppelin's Ownable and Roles. Carefully define who can access sensitive functions and data, and thoroughly test these access controls.</td>
  </tr>
</table>
    
      
    </div>
  );
}

export default Report;
