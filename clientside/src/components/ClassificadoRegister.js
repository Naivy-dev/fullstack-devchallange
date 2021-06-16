import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap'
import useRegister from './useRegister'
import * as actions from '../actions/classificado'
import { connect } from "react-redux"

const initialFieldValues = {
    titulo: '',
    descricao: ''
}

const ClassificadoRegister = (props) => {

    const validate = (fieldValues = values) => {
        let temp = {}
        if ('titulo' in fieldValues)
            temp.titulo = values.titulo != "" ? "" : "Esse campo é obrigatório."
        if ('descricao' in fieldValues)
            temp.descricao = values.descricao != "" ? "" : "Esse campo é obrigatório."
        setErrors({
            ...temp
        })
        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInput
    } = useRegister(initialFieldValues)

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            props.createClassificado(values, () => { window.alert('Registrado!') })
        }
    }

    return (
        <Container>
            <h3>Registro de Classificados</h3><br />
            <InputGroup aria-autocomplete="off" xs="auto" className="input-group mb-3" onSubmit={handleSubmit}>

                <Form>
                    <Row>
                        <Col>
                            <Form.Control
                                name="titulo"
                                label="titulo"
                                placeholder="Título"
                                value={values.titulo} onChange={handleInput} />
                        </Col>
                    </Row><br />
                    <Row>
                        <Col>
                            <Form.Control
                                name="descricao"
                                as="textarea"
                                label="descricao"
                                placeholder="Descrição"
                                value={values.descricao}
                                onChange={handleInput} />
                        </Col>
                    </Row><br />
                    <Button variant="primary" type="submit">
                        Publicar
                    </Button>
                </Form>
            </InputGroup>
        </Container>
    )
}

const mapActionsToProps = {
    createClassificado: actions.create
}

const mapStateToProps = state => ({ classificadoList: state.classificado.list })

export default connect(mapStateToProps, mapActionsToProps)(ClassificadoRegister)