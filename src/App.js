import "./App.css"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import ContactForm from "./component/ContactForm"
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactList from "./component/ContactList"
import SearchBox from "./component/SearchBox"
import ContactItem from "./component/ContactItem"

function App() {
	return (
		<div>
			<h1 className="title">연락처</h1>
			<Container>
				<Row>
                    <Col>
                        <ContactForm />
                    </Col>
                    <Col>
                        <ContactList />
                    </Col>
                </Row>
			</Container>
		</div>
	)
}

export default App
