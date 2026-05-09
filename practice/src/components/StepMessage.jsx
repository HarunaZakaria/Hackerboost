export default function StepMessage({ step, children }) {
  return (
    <div>
      <h3>Step: {step}</h3>
      {children}
    </div>
  );
}
