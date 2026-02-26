import _ from 'lodash';
import { getUsers } from 'src/app/graphql/useUser';

type User = {
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  address: { postalCode: string };
};

const buildNewData = (users: User) => {
  const genderCount = _.countBy(users, 'gender');
  const ages = _.map(users, 'age');
  const minAge = _.min(ages);
  const maxAge = _.max(ages);
  const colorCount = _.countBy(users, 'hair.color');
  const addressUser = _.map(users, (item: User) => ({
    [`${item.firstName} ${item.lastName}`]: item.address.postalCode,
  }));
  const department = {
    male: genderCount?.male,
    female: genderCount?.female,
    ageRange: `${minAge}-${maxAge}`,
    hair: colorCount,
    addressUser: addressUser,
  };
  return department;
};

export default async function Home() {
  const data = await getUsers();
  const users = data?.users;
  const newData = { ...data, department: buildNewData(users) };
  console.log('newData', newData);
  return <div></div>;
}
