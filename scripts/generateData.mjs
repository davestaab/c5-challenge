import challenges from '../src/store/state/challenges';
import people from '../src/store/state/people';
import submissions from '../src/store/state/submissions';
import teamChallenges from '../src/store/state/teamChallenges';
import teams from '../src/store/state/teams';
import fs from 'fs';
import path from 'path';

const data = {
  challenges,
  people,
  submissions,
  teamChallenges,
  teams
};

const DATA_PATH = path.resolve('public');

fs.writeFileSync(DATA_PATH + '/allData.json', JSON.stringify(data));
