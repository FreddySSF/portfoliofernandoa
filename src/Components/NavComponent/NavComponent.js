import '../NavComponent/NavComponent.css';
import { Nav } from 'react-bootstrap';
import React from 'react';


export default function NavComponent(){

    return(
        <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    )
}
