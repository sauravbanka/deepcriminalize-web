import React from "react";
import {Table, Image, Row, Col} from "react-bootstrap";

class Output extends React.Component {
  constructor(props) {
    super(props);
  }

  /* Sample code for stopping updates.
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.count !== nextProps.count) {
      return true;
    } else {
      return false;
    }
  }
  */

  render() {
    return (
      <Row style={{ paddingTop: 20, }}>
        <Col md="2" xl="2" lg="2" />
        <Col md="9" xl="9" lg="9">
        <p>Case Number: {this.props.case}</p>
        <p>Witness Name: {this.props.witname}</p>
        <p>Gender: {this.props.gender}</p>
        <p>Ethnicity: {this.props.ethnicity}</p>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image 1</th>
              <th>Image 2</th>
              <th>Image 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Image src="logo.png" thumbnail /> Replace with GAN Image</td>
              <td><Image src="logo.png" thumbnail /> Replace with GAN Image</td>
              <td><Image src="logo.png" thumbnail /> Replace with GAN Image</td>
            </tr>
          </tbody>
        </Table>
      </Col>
      <Col md="2" xl="2" lg="2" />
    </Row>
    );
  }
}

export default Output;
