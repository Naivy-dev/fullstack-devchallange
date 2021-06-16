import React, { useState } from 'react'
import Classificados from './Classificados'
import ClassificadoRegister from './ClassificadoRegister';
import { Button, Row, Col } from 'react-bootstrap'


const ChangeButton = () => {
    const [mode, setMode] = useState('view')

    return (
        <>
            <Col>
                <Row><Button variant='primary' onClick={() => setMode('view')}>Ver classificados</Button></Row>
                <Row><Button variant='primary' onClick={() => setMode('register')}>Registrar novo classificado</Button></Row>
            </Col>
            <div>
                {mode === "view" && <Classificados />}
                {mode === "register" && <ClassificadoRegister />}
            </div>
        </>
    )
}

export default ChangeButton