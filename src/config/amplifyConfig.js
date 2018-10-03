import Amplify from 'aws-amplify';

export default function configureAmplify(identityPoolId, region, name, alias) {
  const configuration = {
    Auth: { identityPoolId, region },
    Interactions: { bots: {} }
  };

  configuration.Interactions.bots[name] = { name, alias, region };

  Amplify.configure(configuration);
}
