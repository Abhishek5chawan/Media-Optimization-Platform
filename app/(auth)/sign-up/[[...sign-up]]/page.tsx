import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div style={styles.container}>
      <SignUp />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#000000', // Optional: Adds a background color for aesthetics
  },
};
