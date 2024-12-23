import { getProviders, signIn } from 'next-auth/react';

export default function SignIn({ providers }) {

  return (
    <div>
      <h1>Sign In</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id, { callbackUrl: 'https://authentication-module-ke6vx6nt3-dmytros-projects-2a79fa69.vercel.app/protected' })}>Sign in with {provider.name}</button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return { props: { providers } };
}
