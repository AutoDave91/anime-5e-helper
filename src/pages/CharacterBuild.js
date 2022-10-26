import React, {
    useEffect,
    useState
} from "react";
import defaultData from "../defaultData";
// import { Link } from "react-router-dom";
const { playableRaces, attributes, defects } = defaultData

//components

const CharacterBuild = () => {
    const [usedPoints, setUsedPoints] = useState(0);
    const [selectedRace, setSelectedRace] = useState({ 'cost': 0 });
    const [strength, setStrength] = useState({ 'score': 0, 'value': 0 })
    const [dexterity, setDexterity] = useState({ 'score': 0, 'value': 0 })
    const [constitution, setConstitution] = useState({ 'score': 0, 'value': 0 })
    const [intelligence, setIntelligence] = useState({ 'score': 0, 'value': 0 })
    const [wisdom, setWisdom] = useState({ 'score': 0, 'value': 0 })
    const [charisma, setCharisma] = useState({ 'score': 0, 'value': 0 })
    const [overBudget, setOverBudget] = useState(false)
    const [attribute, setAttribute] = useState({ 'value': 0 })
    const [attList, setAttList] = useState([])
    const [defect, setDefect] = useState({ 'value': 0 })
    const [defectList, setDefectList] = useState([])
    const [charName, setCharName] = useState('')
    const [charClass, setCharClass] = useState('')
    const [abilityScoreMethod, setAbilityScoreMethod] = useState('Player Choice')
    const [availableScores, setAvailableScores] = useState([['8', -1], ['10', 0], ['12', 1], ['13', 1], ['14', 2], ['15', 2]])

    const absOptions = [
        ['3', -4], ['4', -3], ['5', -3], ['6', -2], ['7', -2], ['8', -1], ['9', -1], ['10', 0], ['11', 0], ['12', 1], ['13', 1], ['14', 2], ['15', 2], ['16', 3], ['17', 3], ['18', 4]
    ];

    const handleRaceChange = (event) => {
        if (event.target.value) {
            if (event.target.value === ',0') {
                setSelectedRace({ 'cost': 0 })
                return
            }
            setSelectedRace(playableRaces[event.target.value])
        }
    };
    const handleAbilityScoreChange = (event, ability) => {
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
    const resetABS = () => {
        setStrength({ 'score': 0, 'value': 0 });
        setDexterity({ 'score': 0, 'value': 0 });
        setConstitution({ 'score': 0, 'value': 0 });
        setIntelligence({ 'score': 0, 'value': 0 });
        setWisdom({ 'score': 0, 'value': 0 });
        setCharisma({ 'score': 0, 'value': 0 });
        setAvailableScores([['8', -1], ['10', 0], ['12', 1], ['13', 1], ['14', 2], ['15', 2]]);
    }
    const handleAbilityChoice = (event, ability) => {
        if (event.target.value) {
            let abilityArr = [];
            let abilityScoreArr = event.target.value.split(",");
            let abilityScoreObj = { 'score': abilityScoreArr[0], 'value': +abilityScoreArr[1] }

            availableScores.forEach((score) => { if (score[0] !== abilityScoreObj.score) { abilityArr.push(score) } })
            console.log(abilityArr)

            var elements = document.getElementsByClassName('fixedOption');
            for (var i = 0; i < elements.length; i++) {
                elements[i].selectedIndex = 0;
            }
            console.log(availableScores)

            if (ability === 'strength') {
                console.log(strength.score === 0)
                if (strength.score !== 0) { abilityArr.push([strength.score, strength.value]) }
                setStrength(abilityScoreObj)
            }
            if (ability === 'dexterity') {
                if (dexterity.score !== 0) { abilityArr.push([dexterity.score, dexterity.value]) }
                setDexterity(abilityScoreObj)
            }
            if (ability === 'constitution') {
                if (constitution.score !== 0) { abilityArr.push([constitution.score, constitution.value]) }
                setConstitution(abilityScoreObj)
            }
            if (ability === 'intelligence') {
                if (intelligence.score !== 0) { abilityArr.push([intelligence.score, intelligence.value]) }
                setIntelligence(abilityScoreObj)
            }
            if (ability === 'wisdom') {
                if (wisdom.score !== 0) { abilityArr.push([wisdom.score, wisdom.value]) }
                setWisdom(abilityScoreObj)
            }
            if (ability === 'charisma') {
                if (charisma.score !== 0) { abilityArr.push([charisma.score, charisma.value]) }
                setCharisma(abilityScoreObj)
            }
            setAvailableScores(abilityArr)
        }
    };

    const handleAttChange = (event) => {
        // console.log(event.target.name)
        if (event.target.value) {
            if (event.target.value === ',0') {
                return
            }
            setAttList([attributes[event.target.value], ...attList])
            setAttribute(attributes[event.target.value])
        }
    };
    const handleDefectChange = (event) => {
        if (event.target.value) {
            if (event.target.value === ',0') {
                return
            }
            // let defectArr = event.target.value.split(",");
            // let defectObj = { 'name': defectArr[0], 'value': +defectArr[1] }
            setDefectList([defects[event.target.value], ...defectList])
            setDefect(defects[event.target.value])
        }
    };

    // const addAtt = (e) => {
    //     e.preventDefault();
    //     if (attribute === '') {
    //         return
    //     }
    //     setAttList([attribute, ...attList])
    //     setAttribute('')
    // }
    // const removeSelectedService = (e, service) => {
    //     e.preventDefault();
    //     let serviceArray = attList
    //     serviceArray.splice(serviceArray.indexOf(service), 1)
    //     console.log(serviceArray)
    //     setAttList(serviceArray)
    //     setVendorService(service)
    // }

    useEffect(() => {
        console.log(selectedRace);

        const totalPoints = () => {
            let attTotal = 0;
            let defectTotal = 0;
            attList.forEach((att) => attTotal += +att.value)
            defectList.forEach((defect) => defectTotal -= +defect.value)
            let total = (
                +strength.score +
                +dexterity.score +
                +constitution.score +
                +intelligence.score +
                +wisdom.score +
                +charisma.score +
                +selectedRace.cost +
                +attTotal +
                +defectTotal
            )
            setUsedPoints(total)
        }
        if (usedPoints > 80) {
            setOverBudget(true);
        } else if (usedPoints <= 80) {
            setOverBudget(false)
        }

        totalPoints();
    }, [setOverBudget, selectedRace.cost, usedPoints, attribute.score, defect.score, strength.score, dexterity.score, constitution.score, intelligence.score, wisdom.score, charisma.score, attList, defectList, selectedRace])

    return (
        <div>
            <h1>Character Build</h1>
            <div>
                {!overBudget ? (<p>{usedPoints} / 80 points used</p>) : (<p className="overB">{usedPoints} / 80 points used</p>)}
            </div>
            <div>
                <form>
                    <input type="text" onChange={(e) => setCharName(e.target.value)} value={charName} placeholder='Name' />
                    <input type="text" onChange={(e) => setCharClass(e.target.value)} value={charClass} placeholder='Class' />
                    <h3>Race</h3>
                    <select onChange={handleRaceChange}>
                        <option value={['', 0]} >Select Race</option>
                        {playableRaces.map((race, index) => <option value={index} >{race.race}</option>)}
                    </select>
                    <div>
                        <h3>Ability Scores</h3>
                        <div className="absButtonGroup">
                            <button onClick={(e) => { e.preventDefault(); setAbilityScoreMethod('Player Choice'); resetABS() }}>Player Choice</button>
                            <button onClick={(e) => { e.preventDefault(); setAbilityScoreMethod('Fixed Numbers'); resetABS() }}>Fixed Numbers</button>
                            <button onClick={(e) => { e.preventDefault(); setAbilityScoreMethod('Roll Dice'); resetABS() }}>Roll Dice</button>
                        </div>
                        {abilityScoreMethod === 'Fixed Numbers' && (
                            <div>
                                <p>{abilityScoreMethod}</p>
                                <div className="abilityScoreWrapper">
                                    <div className='abilityScoreBlock'>
                                        <h4>Strength</h4>
                                        <select className="fixedOption" onChange={(e) => handleAbilityChoice(e, 'strength')}>
                                            <option value={['', 0]} >Ability Score</option>
                                            {strength.score !== 0 && <option value={['0', 0]} >Reset Score</option>}
                                            {availableScores.map((abs) => <option value={abs} >{abs[0]}</option>)}
                                        </select>
                                        <p>{strength && strength.score}</p>
                                        <div>{strength && <p>{strength.value >= 1 ? `+${strength.value}` : strength.value}</p>}</div>
                                    </div>
                                    <div className='abilityScoreBlock'>
                                        <h4>Dexterity</h4>
                                        <select className="fixedOption" onChange={(e) => handleAbilityChoice(e, 'dexterity')}>
                                            <option value={['', 0]} >Ability Score</option>
                                            {dexterity.score !== 0 && <option value={['0', 0]} >Reset Score</option>}
                                            {availableScores.map((abs) => <option className="fixedOption" value={abs} >{abs[0]}</option>)}

                                        </select>
                                        <p>{dexterity && dexterity.score}</p>
                                        <div>{dexterity && <p>{dexterity.value >= 1 ? `+${dexterity.value}` : dexterity.value}</p>}</div>
                                    </div>
                                    <div className='abilityScoreBlock'>
                                        <h4>Constitution</h4>
                                        <select className="fixedOption" onChange={(e) => handleAbilityChoice(e, 'constitution')}>
                                            <option value={['', 0]} >Ability Score</option>
                                            {constitution.score !== 0 && <option value={['0', 0]} >Reset Score</option>}
                                            {availableScores.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                        </select>
                                        <p>{constitution && constitution.score}</p>
                                        <div>{constitution && <p>{constitution.value >= 1 ? `+${constitution.value}` : constitution.value}</p>}</div>
                                    </div>
                                    <div className='abilityScoreBlock'>
                                        <h4>Intelligence</h4>
                                        <select className="fixedOption" onChange={(e) => handleAbilityChoice(e, 'intelligence')}>
                                            <option value={['', 0]} >Ability Score</option>
                                            {intelligence.score !== 0 && <option value={['0', 0]} >Reset Score</option>}
                                            {availableScores.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                        </select>
                                        <p>{intelligence && intelligence.score}</p>
                                        <div>{intelligence && <p>{intelligence.value >= 1 ? `+${intelligence.value}` : intelligence.value}</p>}</div>
                                    </div>
                                    <div className='abilityScoreBlock'>
                                        <h4>Wisdom</h4>
                                        <select className="fixedOption" onChange={(e) => handleAbilityChoice(e, 'wisdom')}>
                                            <option value={['', 0]} >Ability Score</option>
                                            {wisdom.score !== 0 && <option value={['0', 0]} >Reset Score</option>}
                                            {availableScores.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                        </select>
                                        <p>{wisdom && wisdom.score}</p>
                                        <div>{wisdom && <p>{wisdom.value >= 1 ? `+${wisdom.value}` : wisdom.value}</p>}</div>
                                    </div>
                                    <div className='abilityScoreBlock'>
                                        <h4>Charisma</h4>
                                        <select className="fixedOption" onChange={(e) => handleAbilityChoice(e, 'charisma')}>
                                            <option value={['', 0]} >Ability Score</option>
                                            {charisma.score !== 0 && <option value={['0', 0]} >Reset Score</option>}
                                            {availableScores.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                        </select>
                                        <p>{charisma && charisma.score}</p>
                                        <div>{charisma && <p>{charisma.value >= 1 ? `+${charisma.value}` : charisma.value}</p>}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {abilityScoreMethod === 'Player Choice' && (
                            <div>
                                <p>{abilityScoreMethod}</p>
                                <div className="abilityScoreWrapper">
                                    <div className='abilityScoreBlock'>
                                        <h4>Strength</h4>
                                        <select onChange={(e) => handleAbilityScoreChange(e, 'strength')}>
                                            <option value={['', 0]} >Ability Score</option>
                                            {absOptions.map((abs) => <option value={abs} >{abs[0]}</option>)}
                                        </select>
                                        <div>{strength && <p>{strength.value >= 1 ? `+${strength.value}` : strength.value}</p>}</div>
                                    </div>
                                    <div className='abilityScoreBlock'>
                                        <h4>Dexterity</h4>
                                        <select onChange={(e) => handleAbilityScoreChange(e, 'dexterity')}>
                                            <option value={['', 0]} >Ability Score</option>
                                            {absOptions.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                        </select>
                                        <div>{dexterity && <p>{dexterity.value >= 1 ? `+${dexterity.value}` : dexterity.value}</p>}</div>
                                    </div>
                                    <div className='abilityScoreBlock'>
                                        <h4>Constitution</h4>
                                        <select onChange={(e) => handleAbilityScoreChange(e, 'constitution')}>
                                            <option value={['', 0]} >Ability Score</option>
                                            {absOptions.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                        </select>
                                        <div>{constitution && <p>{constitution.value >= 1 ? `+${constitution.value}` : constitution.value}</p>}</div>
                                    </div>
                                    <div className='abilityScoreBlock'>
                                        <h4>Intelligence</h4>
                                        <select onChange={(e) => handleAbilityScoreChange(e, 'intelligence')}>
                                            <option value={['', 0]} >Ability Score</option>
                                            {absOptions.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                        </select>
                                        <div>{intelligence && <p>{intelligence.value >= 1 ? `+${intelligence.value}` : intelligence.value}</p>}</div>
                                    </div>
                                    <div className='abilityScoreBlock'>
                                        <h4>Wisdom</h4>
                                        <select onChange={(e) => handleAbilityScoreChange(e, 'wisdom')}>
                                            <option value={['', 0]} >Ability Score</option>
                                            {absOptions.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                        </select>
                                        <div>{wisdom && <p>{wisdom.value >= 1 ? `+${wisdom.value}` : wisdom.value}</p>}</div>
                                    </div>
                                    <div className='abilityScoreBlock'>
                                        <h4>Charisma</h4>
                                        <select onChange={(e) => handleAbilityScoreChange(e, 'charisma')}>
                                            <option value={['', 0]} >Ability Score</option>
                                            {absOptions.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                        </select>
                                        <div>{charisma && <p>{charisma.value >= 1 ? `+${charisma.value}` : charisma.value}</p>}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {abilityScoreMethod === 'Roll Dice' && (
                            <div>
                                <p>{abilityScoreMethod}</p>
                                <div>
                                    <button>Randomly with 4d6</button>
                                    <button>Randomly with Excess 3d6</button>
                                    <button>Strict 3d6 in Order</button>
                                </div>
                                <p>Dice Methods are not yet implemented...</p>
                            </div>
                        )}
                        <div className="abilityScoreWrapper">
                            <div>
                                <h3>Attributes</h3>
                                <select onChange={handleAttChange}>
                                    <option value={['', 0]} >Attributes</option>
                                    {attributes.map((att, index) => <option value={index} >{att.name} - Rank {att.rank}</option>)}
                                </select>
                                <ul>
                                    {/* {console.log(attList)} */}
                                    {attList && attList.map((att) => <li>{att.name} - Rank {att.rank}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h3>Defects</h3>
                                <select onChange={handleDefectChange}>
                                    <option value={['', 0]} >Defects</option>
                                    {defects.map((defect, index) => <option value={index} >{defect.name} - Rank {defect.rank}</option>)}
                                </select>
                                <ul>
                                    {defectList && defectList.map((defect) => <li>{defect.name} - Rank {defect.rank}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </form>
                {usedPoints !== 0 &&
                    <div>
                        <h2>Character Preview</h2>
                        <h3>{charName && charName}</h3>
                        <h4>Points Remaining: {80 - usedPoints}</h4>
                        <h4>{selectedRace && selectedRace.race} {charClass && charClass}</h4>
                        <div className="abilityScoreWrapper">
                            <div className='abilityScoreBlock'>
                                <h4>Strength</h4>
                                <p>{strength && strength.score}</p>
                                {<p>{strength.value >= 1 ? `+${strength.value}` : strength.value}</p>}
                            </div>
                            <div className='abilityScoreBlock'>
                                <h4>Dexterity</h4>
                                <p>{dexterity && dexterity.score}</p>
                                {<p>{dexterity.value >= 1 ? `+${dexterity.value}` : dexterity.value}</p>}
                            </div>
                            <div className='abilityScoreBlock'>
                                <h4>Constitution</h4>
                                <p>{constitution && constitution.score}</p>
                                {<p>{constitution.value >= 1 ? `+${constitution.value}` : constitution.value}</p>}
                            </div>
                            <div className='abilityScoreBlock'>
                                <h4>Intelligence</h4>
                                <p>{intelligence && intelligence.score}</p>
                                {<p>{intelligence.value >= 1 ? `+${intelligence.value}` : intelligence.value}</p>}
                            </div>
                            <div className='abilityScoreBlock'>
                                <h4>Wisdom</h4>
                                <p>{wisdom && wisdom.score}</p>
                                {<p>{wisdom.value >= 1 ? `+${wisdom.value}` : wisdom.value}</p>}
                            </div>
                            <div className='abilityScoreBlock'>
                                <h4>Charisma</h4>
                                <p>{charisma && charisma.score}</p>
                                {<p>{charisma.value >= 1 ? `+${charisma.value}` : charisma.value}</p>}
                            </div>
                        </div>
                        {selectedRace &&
                            <div className="raceInfoWrapper">
                                {selectedRace.race_mods && <div>
                                    <div className='raceInfo'><h4>Attribute/Defect</h4><h4>Points</h4></div>
                                    <ul>
                                        {selectedRace.race_mods.map((race) => (
                                            <li className='raceInfo'><p>{race.name}</p><p>{race.modifier}</p></li>
                                        ))}
                                    </ul>
                                </div>
                                }
                            </div>
                        }
                    </div>
                }
            </div >
        </div >
    );
};

export default CharacterBuild;