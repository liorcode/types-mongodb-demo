import { MongoClient, Db } from 'mongodb';

interface Doc {
  name: string;
  accounts: {pageId: string};
}

const client: Db = null;
client.collection<Doc>('col').find({
  'accounts.pageId': {$in: [1, 2, 3]},
}, {projection: {'accounts.pageId': 1}})
  .sort({name: -1});
