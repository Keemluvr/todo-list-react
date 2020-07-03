import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Creators = () => {
    const { idCreator } = useParams()
    const navigate = useNavigate()

    return (
        <div>
            <h1>Creators</h1>
            <ul>
                <li>
                    <span>{idCreator}</span>
                    <p>Keila Daiane Fernandes</p>
                    <button onClick={() => navigate('/') }>Home</button>
                </li>
            </ul>
        </div>
    )
}

export default Creators