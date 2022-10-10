import React, {
    useEffect,
    useState
} from "react";
// import { Link } from "react-router-dom";

//components

const CharacterBuild = () => {
    const [usedPoints, setUsedPoints] = useState(0);
    const [selectedClass, setSelectedClass] = useState({ 'value': 0 });
    const [strength, setStrength] = useState({ 'value': 0 })
    const [dexterity, setDexterity] = useState({ 'value': 0 })
    const [constitution, setConstitution] = useState({ 'value': 0 })
    const [intelligence, setIntelligence] = useState({ 'value': 0 })
    const [wisdom, setWisdom] = useState({ 'value': 0 })
    const [charisma, setCharisma] = useState({ 'value': 0 })

    const absOptions = [['1', -5], ['2', -4], ['3', -4], ['4', -3], ['5', -3], ['6', -2], ['7', -2], ['8', -1], ['9', -1], ['10', 0], ['11', 0], ['12', 1], ['13', 1], ['14', 2], ['15', 2], ['16', 3], ['17', 3], ['18', 4], ['19', 4], ['20', 5], ['21', 5], ['22', 6], ['23', 6], ['24', 7], ['25', 7], ['26', 8], ['27', 8], ['28 ', 9], ['29', 9], ['30', 10]];
    // const [update, setUpdate] = useState(false);

    const handleRaceChange = (event) => {
        if (event.target.value) {
            let raceArr = event.target.value.split(",");
            let raceObj = { 'name': raceArr[0], 'value': +raceArr[1] }
            setSelectedClass(raceObj)
        }
    };
    const handleAttributeScoreChange = (event, ability) => {
        if (event.target.value) {
            let abilityScoreArr = event.target.value.split(",");
            let abilityScoreObj = { 'score': abilityScoreArr[0], 'value': +abilityScoreArr[1] }

            if (ability === 'strength') {
                setStrength(abilityScoreObj)
            }
            if (ability === 'dexterity') {
                setDexterity(abilityScoreObj)
            }
            if (ability === 'constitution') {
                setConstitution(abilityScoreObj)
            }
            if (ability === 'intelligence') {
                setIntelligence(abilityScoreObj)
            }
            if (ability === 'wisdom') {
                setWisdom(abilityScoreObj)
            }
            if (ability === 'charisma') {
                setCharisma(abilityScoreObj)
            }
        }
    };

    useEffect(() => {
        const totalPoints = () => {
            let total = (
                +selectedClass.value +
                +strength.value +
                +dexterity.value +
                +constitution.value +
                +intelligence.value +
                +wisdom.value +
                +charisma.value
            )
            // if (selectedClass.value) {
            //     total += +selectedClass.value
            // }
            // total += +abilityScore.value
            setUsedPoints(total)
        }

        totalPoints();
    })

    return (
        <div>
            <h1>Character Build</h1>
            <div>
                <p>{usedPoints} / 80 points used</p>
            </div>
            <div>
                <h2>Character build form</h2>
                <form>
                    <select onChange={handleRaceChange}>
                        <option value={['', 0]} >Select Race</option>
                        <option value={['Race 2', 5]} >test 2 Race</option>
                        <option value={['Race 1', 10]} > Test Race</option>
                    </select>
                    <div>
                        <h3>Ability Scores</h3>
                        <div>
                            <div>
                                <h4>Strength</h4>
                                <select onChange={(e) => handleAttributeScoreChange(e, 'strength')}>
                                    <option value={['', 0]} >Ability Score</option>
                                    {absOptions.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                </select>
                                <div>{strength && <p>{strength.value >= 1 ? `+${strength.value}` : strength.value}</p>}</div>
                            </div>
                            <div>
                                <h4>Dexterity</h4>
                                <select onChange={(e) => handleAttributeScoreChange(e, 'dexterity')}>
                                    <option value={['', 0]} >Ability Score</option>
                                    {absOptions.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                </select>
                                <div>{dexterity && <p>{dexterity.value >= 1 ? `+${dexterity.value}` : dexterity.value}</p>}</div>
                            </div>
                            <div>
                                <h4>Constitution</h4>
                                <select onChange={(e) => handleAttributeScoreChange(e, 'constitution')}>
                                    <option value={['', 0]} >Ability Score</option>
                                    {absOptions.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                </select>
                                <div>{constitution && <p>{constitution.value >= 1 ? `+${constitution.value}` : constitution.value}</p>}</div>
                            </div>
                            <div>
                                <h4>Intelligence</h4>
                                <select onChange={(e) => handleAttributeScoreChange(e, 'intelligence')}>
                                    <option value={['', 0]} >Ability Score</option>
                                    {absOptions.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                </select>
                                <div>{intelligence && <p>{intelligence.value >= 1 ? `+${intelligence.value}` : intelligence.value}</p>}</div>
                            </div>
                            <div>
                                <h4>Wisdom</h4>
                                <select onChange={(e) => handleAttributeScoreChange(e, 'wisdom')}>
                                    <option value={['', 0]} >Ability Score</option>
                                    {absOptions.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                </select>
                                <div>{wisdom && <p>{wisdom.value >= 1 ? `+${wisdom.value}` : wisdom.value}</p>}</div>
                            </div>
                            <div>
                                <h4>Charisma</h4>
                                <select onChange={(e) => handleAttributeScoreChange(e, 'charisma')}>
                                    <option value={['', 0]} >Ability Score</option>
                                    {absOptions.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                </select>
                                <div>{charisma && <p>{charisma.value >= 1 ? `+${charisma.value}` : charisma.value}</p>}</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default CharacterBuild;