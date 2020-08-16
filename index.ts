import { MongoClient, Db } from 'mongodb';

interface Doc {
  name: string;
  accounts: {pageId: string};
}

const client: Db = null;
client.collection<Doc>('col').find({
  'accounts.pageId': {$in: [1, 2, 3]},
}, {projection: {'accounts.pageId': 1}})
  .map(user => user.accounts.pageId);

async function getUserPages() {
  const users = await client.collection<Doc>('users').find({
      'account.pageId': {$in: [1, 2, 3]},
    }, {projection: {'account.pageId': 1}})
      .toArray();

  return users.map(user => user.account.pageId)
}