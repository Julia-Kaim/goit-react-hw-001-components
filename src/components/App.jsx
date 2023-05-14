import { Layout } from './Layout/Layout';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { FriendList } from './FriendList/FriendList';

import user from '../data/user';
import data from '../data/data';
import transactions from '../data/transaction';
import friends from '../data/friends';

export const App = () => {
  return (
    <Layout>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />
      <FriendList friends={friends} />
    </Layout>
  );
};
