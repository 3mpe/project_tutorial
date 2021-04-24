
import User from "./user";
export default function UserList({ data = [], onPressDelete = () => {},  onPressEdit = () => {} }) {
  return (
    <table>
       <thead>
        <tr>
          <td width="50">_id</td>
          <td width="250">Kullanici Adi</td>
          <td width="250">Sifre</td>
          <td width="250">#</td>
        </tr>
      </thead>
      <tbody>
        { data.map((user, index) => <User key={index} user={user} onPressDelete={onPressDelete} onPressEdit={onPressEdit} />) }
      </tbody>
    </table>
  );
}
