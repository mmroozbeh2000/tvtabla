import React, { useEffect, useState } from 'react'


const ProgramList = () => {

    const [programs, setPrograms] = useState([]);

    const loadProgramsFromJson = async () => {

        const response = await fetch("programs.json");
        const data = await response.json();
        setPrograms(data);
    }

    useEffect(() => {

        loadProgramsFromJson()
    }, [])
    return (
        <div className="container">

            <div className="row">

                <div className="col-sm"></div>

                <div className="col-sm">

                    <h1 className="channel-title"> SVT 1</h1>

                    <ul className="program-list">

                        {programs.map(program => (

                            <li className="program-list__item">

                                <h2 className="prog_time">{program.time}</h2>

                                <p className="prog_desc">{program.description}</p>

                            </li>))}

                    </ul>

                </div>

                <div className="col-sm"></div>

            </div>

        </div>
    )

}
export default ProgramList;