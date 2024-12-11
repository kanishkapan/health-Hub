import './App.css';
import Layout from './layout/Layout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('sk_test_51QUqVqCzhX61Q8fvokhCByuhZEZqds8RMBlFS7OPASBr3rOZRiMMsnDV01xe8um5qItqdlmvA2w2EiGjsvs5nkxH005lhCc9e8'); // Replace with your actual publishable key

function App() {
  return  (
  <Elements stripe={stripePromise}>
     <Layout/>
    </Elements>
 )
  
}

export default App
