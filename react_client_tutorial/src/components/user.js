export default function User({ user: { _id, name, password, }, onPressDelete = () => {},  onPressEdit = () => {} }) {
    return (
        <tr>
            <td width="50">{_id.substr(0,6)}</td>
            <td width="250">{name}</td>
            <td width="250">{password}</td>
            <td width="250">
                <button onClick={() => onPressDelete(_id)}>Sil</button>
                <button onClick={() => onPressEdit({ _id, name, password })}>Duzenle</button>
            </td>
        </tr>
    );
}
