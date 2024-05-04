import { useEffect, useMemo, useState } from "react";

type CapitalCountryGameData = {
    [country: string]: string;
  };
  
  type CapitalCountryGameProps = {
    data: CapitalCountryGameData;
  };

  type Option = {
    id: number;
    value: string;
    position?: number;
  };

const CapitalCountryGame = ({data}: CapitalCountryGameProps) => {
    const [options, setOptions] = useState<Option[]>([]);
    const [selected, setSelected] = useState<Option[]>([]);
    const [correctAnswers, setCorrectAnswers] = useState<Option[]>([])
    const [isError, setIsError] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const countries = Object.keys(data);
    const capitals = Object.values(data);

    const addId = (arr: string[]) => {
        return arr.map((item, index) => ({
          id: index,
          value: item,
        }));
    }

    const countriesWithId = addId(countries);
    const capitalsWithId = addId(capitals);

    useEffect(() => {
        const allOption = [...countriesWithId, ...capitalsWithId];
        setOptions(allOption);
    }, []);


    const shuffle = (arr: Option[]) => {
        return arr.sort(() => Math.random() - 0.5).map((item, index) => ({
            ...item,
            position: index,
        }));
    }

    const verifyAnswer = () => {
        const [first, second] = selected;

        if (first.id === second.id) {
            setIsCorrect(true);
            setTimeout(() => {
                setIsCorrect(false);
                setSelected([]);
                setOptions(options.filter((item) => item.id !== first.id && item.id !== second.id));
                setCorrectAnswers([...correctAnswers, first, second]);
            }, 1000);
            return;
        } else {
            setIsError(true);
            setTimeout(() => {
                setIsError(false);
                setSelected([]);
            }, 1000);
        }
    }

    useEffect(() => {
        if (selected.length === 2) {
            verifyAnswer();
        }
    }, [selected]);

    const handleSelect = (option: Option) => {
       setSelected([...selected, option]);

       if (selected.includes(option)) {
            setSelected(selected.filter((item) => item.id !== option.id));
       }
    }

    const shuffledOptions = useMemo(() => shuffle(options), [options]);

  return (
    <div>
        <h1>Capital country game</h1>
        <div>
            {
            shuffledOptions.length > 0 &&
            shuffledOptions.map((option: Option) => (
                <button 
                    key={option.position}
                    style={{
                        padding: '10px',
                        margin: '5px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        backgroundColor: isError && selected.includes(option) ? 'red' :
                                         isCorrect && selected.includes(option) ? 'green' : 
                                         selected.includes(option) ? 
                                         'lightgreen' : 'white',
                        display: correctAnswers.includes(option) ? 'none' : 'inline',
                        border: 'none',
                        borderRadius: '5px',
                    }}
                    onClick={() => handleSelect(option)}
                >
                    {option.value}
                </button>
            ))  
        }
        {
            options.length === 0 && 
            <>
                <h2>
                    Congratulations! You have completed the game.
                </h2>
                <button
                    style={{
                        padding: '10px',
                        margin: '5px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        backgroundColor: 'blue',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                    }}
                    onClick={() => {
                        setOptions([...countriesWithId, ...capitalsWithId]);
                        setCorrectAnswers([]);
                    }}
                >
                    Play again
                </button>
            </>
        }
        </div>
    </div>
  )
}

export default CapitalCountryGame;