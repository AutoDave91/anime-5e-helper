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
    const [overBudget, setOverBudget] = useState(false)
    const [attribute, setAttribute] = useState({ 'value': 0 })
    const [attList, setAttList] = useState([])

    const absOptions = [['1', -5], ['2', -4], ['3', -4], ['4', -3], ['5', -3], ['6', -2], ['7', -2], ['8', -1], ['9', -1], ['10', 0], ['11', 0], ['12', 1], ['13', 1], ['14', 2], ['15', 2], ['16', 3], ['17', 3], ['18', 4], ['19', 4], ['20', 5], ['21', 5], ['22', 6], ['23', 6], ['24', 7], ['25', 7], ['26', 8], ['27', 8], ['28 ', 9], ['29', 9], ['30', 10]];
    const raceOptions = [['Archfiend', 15], ['Asrai', 11], ['Blinkbeast', 10], ['Demonaga', 14], ['Dragonborn', 9], ['Dwarf - Hill', 12], ['Dwarf - Mountain', 14], ['Elf - Dark', 13], ['Elf - High', 12], ['Elf - Wood', 11], ['Fairy', 4], ['Gnome - Forest', 4], ['Gnome - Rock', 4], ['Half-Dragon', 13], ['Half-Elf', 10], ['Half-Orc', 8], ['Half-Troll', 9], ['Halfling - Lightfoot', 3], ['Halfling - Stout', 5], ['Haud', 12], ['Human', 7], ['Kodama', 10], ['Parasite', 16], ['Satyr', 7], ['Slime', 11], ['Tiefling', 12]];
    const attOptions = [['+10', 10]];

    const handleRaceChange = (event) => {
        if (event.target.value) {
            let raceArr = event.target.value.split(",");
            let raceObj = { 'name': raceArr[0], 'value': +raceArr[1] }
            setSelectedClass(raceObj)
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

    const handleAttChange = (event) => {
        if (event.target.value) {
            let attArr = event.target.value.split(",");
            let attObj = { 'name': attArr[0], 'value': +attArr[1] }
            setAttList([attObj.name, ...attList])
            setAttribute(attObj)
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
                +charisma.value +
                +attribute.value
            )
            setUsedPoints(total)
        }
        if (usedPoints > 80) {
            setOverBudget(true);
        } else if (usedPoints <= 80) {
            setOverBudget(false)
        }

        totalPoints();
    }, [setOverBudget, selectedClass.value, strength.value, dexterity.value, constitution.value, intelligence.value, wisdom.value, charisma.value, usedPoints, attribute.value])

    return (
        <div>
            <h1>Character Build</h1>
            <div>
                {!overBudget ? (<p>{usedPoints} / 80 points used</p>) : (<p className="overB">{usedPoints} / 80 points used</p>)}
            </div>
            <div>
                <form>
                    <h3>Race</h3>
                    <select onChange={handleRaceChange}>
                        <option value={['', 0]} >Select Race</option>
                        {raceOptions.map((race) => <option value={race} >{race[0]}</option>)}
                    </select>
                    <div>
                        <h3>Ability Scores</h3>
                        <p>{`(point buy)`}</p>
                        <div className="abilityScoreWrapper">
                            <div>
                                <h4>Strength</h4>
                                <select onChange={(e) => handleAbilityScoreChange(e, 'strength')}>
                                    <option value={['', 0]} >Ability Score</option>
                                    {absOptions.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                </select>
                                <div>{strength && <p>{strength.value >= 1 ? `+${strength.value}` : strength.value}</p>}</div>
                            </div>
                            <div>
                                <h4>Dexterity</h4>
                                <select onChange={(e) => handleAbilityScoreChange(e, 'dexterity')}>
                                    <option value={['', 0]} >Ability Score</option>
                                    {absOptions.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                </select>
                                <div>{dexterity && <p>{dexterity.value >= 1 ? `+${dexterity.value}` : dexterity.value}</p>}</div>
                            </div>
                            <div>
                                <h4>Constitution</h4>
                                <select onChange={(e) => handleAbilityScoreChange(e, 'constitution')}>
                                    <option value={['', 0]} >Ability Score</option>
                                    {absOptions.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                </select>
                                <div>{constitution && <p>{constitution.value >= 1 ? `+${constitution.value}` : constitution.value}</p>}</div>
                            </div>
                            <div>
                                <h4>Intelligence</h4>
                                <select onChange={(e) => handleAbilityScoreChange(e, 'intelligence')}>
                                    <option value={['', 0]} >Ability Score</option>
                                    {absOptions.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                </select>
                                <div>{intelligence && <p>{intelligence.value >= 1 ? `+${intelligence.value}` : intelligence.value}</p>}</div>
                            </div>
                            <div>
                                <h4>Wisdom</h4>
                                <select onChange={(e) => handleAbilityScoreChange(e, 'wisdom')}>
                                    <option value={['', 0]} >Ability Score</option>
                                    {absOptions.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                </select>
                                <div>{wisdom && <p>{wisdom.value >= 1 ? `+${wisdom.value}` : wisdom.value}</p>}</div>
                            </div>
                            <div>
                                <h4>Charisma</h4>
                                <select onChange={(e) => handleAbilityScoreChange(e, 'charisma')}>
                                    <option value={['', 0]} >Ability Score</option>
                                    {absOptions.map((abs) => <option value={abs} >{abs[0]}</option>)}

                                </select>
                                <div>{charisma && <p>{charisma.value >= 1 ? `+${charisma.value}` : charisma.value}</p>}</div>
                            </div>
                        </div>
                        <h3>Attributes</h3>
                        <select onChange={handleAttChange}>
                            <option value={['', 0]} >Attributes</option>
                            {attOptions.map((att) => <option value={att} >{att[0]}</option>)}
                        </select>
                        <ul>
                            {console.log(attList)}
                            {attList && attList.map((att) => <li>{att}</li>)}
                        </ul>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default CharacterBuild;