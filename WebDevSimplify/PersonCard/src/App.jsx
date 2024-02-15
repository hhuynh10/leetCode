import PersonCard from "./PersonCard";
import user from "./user.json";

export default function App() {
  return (
    <div>
      <PersonCard
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      >
        Person Card: tdghtreg
      </PersonCard>
    </div>
  );
}