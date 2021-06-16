import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/classificado'
import { Container, Row, Col, Card } from 'react-bootstrap'

const convertDate = (data) => {
    const dd = data.substring(8, 10);
    const mm = data.substring(5, 7);
    const yy = data.substring(0, 4);
    const cDate = dd + "/" + mm + "/" + yy;
    return cDate;
}

const Classificados = (props) => {

    useEffect(() => {
        props.fetchAllClassificados()
    }, [])

    return (
        < Container >
            <Col>
                <Row style={{ maxHeight: '10rem' }, { height: '10rem' }} >
                    {
                        props.classificadoList.map((record, index) => {
                            return (
                                <Card key={index} className='shadow-sm p-3 mb-5 bg-white rounded' style={{ width: '20rem' }}>
                                    <Card.Body>
                                        <Card.Title>{record.titulo}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{convertDate(record.data.substring(0, 10))}</Card.Subtitle>
                                        <Card.Text>
                                            <div className="overflow-auto" style={{ fontSize: '0.9rem' }, { height: '15rem' }}>
                                                {record.descricao}
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Row>
            </Col>
        </Container >
    );
}

const mapActionsToProps = {
    fetchAllClassificados: actions.fetchAll
}

const mapStateToProps = state => ({ classificadoList: state.classificado.list.reverse() })

export default connect(mapStateToProps, mapActionsToProps)(Classificados);