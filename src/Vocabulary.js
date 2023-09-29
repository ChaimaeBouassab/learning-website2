import React, { useState } from 'react';

function Vocabulary() {
    const vocabulary = [
      { word: 'aberration', definition: 'a state or condition markedly different from the norm' },
      { word: 'abhor', definition: 'feel hatred or disgust toward' },
      { word: 'acquiesce', definition: 'agree or express agreement' },
      { word: 'alacrity', definition: 'liveliness and eagerness' },
      { word: 'amiable', definition: 'diffusing warmth and friendliness' },
      { word: 'appease', definition: 'make peace with' },
      { word: 'arcane', definition: 'requiring secret or mysterious knowledge' },
      { word: 'avarice', definition: 'reprehensible acquisitiveness; insatiable desire for wealth' },
      { word: 'brazen', definition: 'unrestrained by convention or propriety' },
      { word: 'brusque', definition: 'rudely abrupt or blunt in speech or manner' },
      { word: 'cajole', definition: 'influence or urge by gentle urging, caressing, or flattering' },
      { word: 'callous', definition: 'emotionally hardened' },
      { word: 'candor', definition: 'the quality of being honest and straightforward' },
      { word: 'chide', definition: 'scold or reprimand severely or angrily' },
      { word: 'circumspect', definition: 'careful to consider potential consequences and avoid risk' },
      { word: 'coerce', definition: 'cause to do through pressure or necessity' },
      { word: 'coherent', definition: 'marked by an orderly and consistent relation of parts' },
      { word: 'complacency', definition: 'the feeling you have when you are satisfied with yourself' },
      { word: 'confidant', definition: 'someone to whom private matters are told' },
      { word: 'connive', definition: 'form intrigues (for) in an underhand manner' },
      { word: 'cumulative', definition: 'increasing by successive addition' },
      { word: 'debase', definition: 'corrupt morally or by intemperance or sensuality' },
      { word: 'decry', definition: 'express strong disapproval of' },
      { word: 'deferential', definition: 'showing courteous regard for people\'s feelings' },
      { word: 'demure', definition: 'shy or modest, often in a playful or provocative way' },
      { word: 'deride', definition: 'treat or speak of with contempt' },
      { word: 'despot', definition: 'a cruel and oppressive dictator' },
      { word: 'diligent', definition: 'quietly and steadily persevering in detail or exactness' },
      { word: 'elated', definition: 'exultantly proud and joyful; in high spirits' },
      { word: 'eloquent', definition: 'expressing yourself readily, clearly, effectively' },
      { word: 'embezzle', definition: 'appropriate fraudulently to one\'s own use' },
      { word: 'empathy', definition: 'understanding and entering into another\'s feelings' },
      { word: 'enmity', definition: 'a state of deep-seated ill-will' },
      { word: 'erudite', definition: 'having or showing profound knowledge' },
      { word: 'extol', definition: 'praise, glorify, or honor' },
      { word: 'fabricate', definition: 'make up something artificial or untrue' },
      { word: 'flabbergasted', definition: 'as if struck dumb with astonishment and surprise' },
      { word: 'forsake', definition: 'leave someone who needs or counts on you; leave in the lurch' },
      { word: 'furtive', definition: 'secret and sly' },
      { word: 'gluttony', definition: 'habitual eating to excess' },
      { word: 'gratuitous', definition: 'unnecessary and unwarranted' },
      { word: 'haughty', definition: 'having or showing arrogant superiority' },
      { word: 'hypocrisy', definition: 'pretending to have qualities or beliefs that you do not have' },
      { word: 'impeccable', definition: 'without error or flaw' },
      { word: 'impertinent', definition: 'improperly forward or bold' },
      { word: 'impudent', definition: 'improperly forward or bold' },
      { word: 'indolent', definition: 'disinclined to work or exertion' },
      { word: 'inept', definition: 'generally incompetent and ineffectual' },
      { word: 'infamy', definition: 'a state of extreme dishonor' },
      { word: 'inhibit', definition: 'limit the range or extent of' },
      { word: 'innate', definition: 'present at birth but not necessarily hereditary' },
      { word: 'insatiable', definition: 'impossible to fulfill, appease, or gratify' },
      { word: 'insular', definition: 'narrowly restricted in outlook or scope' },
      { word: 'intrepid', definition: 'invulnerable to fear or intimidation' },
    ];
  
  
    // State to track whether the list should be displayed
    const [showList, setShowList] = useState(false);
    return (
        <div>
          <h2>Vocabulary</h2>
          <button onClick={() => setShowList(!showList)}>Toggle Vocabulary List</button>
          {showList && (
            <ul>
              {vocabulary.map((item, index) => (
                <li key={index}>
                  <strong>{item.word}</strong>: {item.definition}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }
    
export default Vocabulary;