import React,{ useState } from "react";

import { Card, CardBody, Col, Button , Modal, ModalHeader, ModalBody, ModalFooter  } from "reactstrap";

import { Fade } from "react-reveal";
import ReactPlayer from 'react-player/youtube'

const ProjectsCard = ({ data }) => {
	const [modal, setModal] = useState(false)

  	const toggle = () => setModal(!modal);
	return (
		<Col lg="6">
			<Fade bottom duration={1000} distance="40px">
				<Card className="shadow-lg--hover shadow mt-4">
					<CardBody>
						<div className="d-flex px-3">
							<div className="pl-4">
								<h3>{data.name}</h3>
								<p className="description mt-3">{data.desc}</p>
								{data.github ? (
									<Button
										className="btn-icon"
										color="github"
										href={data.github}
										target="_blank"
									>
										<span className="btn-inner--icon">
											<i className="fa fa-github" />
										</span>
									</Button>
								) : null}
								{data.link ? (
									<Button
										className="btn-icon"
										color="success"
										href={data.link}
										target="_blank"
									>
										<span className="btn-inner--icon">
											<i className="fa fa-arrow-right mr-2" />
										</span>
										<span className="nav-link-inner--text ml-1">
											Demo
										</span>
									</Button>
								) : null}
								<Button
										className="btn-icon"
										color="link"
										onClick={toggle}
								>	
									<span className="btn-inner--icon">
												<i className="fa fa-arrow-right mr-2" />
									</span>
								</Button>
							</div>
						</div>
					</CardBody>
				</Card>
			</Fade>
			<Modal isOpen={modal} toggle={toggle} with="50%">
				<ModalHeader toggle={toggle}>{data.name}</ModalHeader>
				<ModalBody>
					{data.video &&
						<ReactPlayer 
							url={data.video} 
							controls
							width="100%"
							height="90%"
						/>
					}
					<br/>
					Roles:
					<ul>
                        {
                        	data.poients ? 
                            data.poients.map((desc) => {
                                return <li key={desc}>{desc}</li>
                            }) : null
                        }
                    </ul>
				</ModalBody>
				{/* <ModalFooter>
				<Button color="primary" onClick={toggle}>Do Something</Button>{' '}
				<Button color="secondary" onClick={toggle}>Cancel</Button>
				</ModalFooter> */}
			</Modal>
		</Col>
		
	);
};

export default ProjectsCard;
