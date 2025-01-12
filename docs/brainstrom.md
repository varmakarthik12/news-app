### Requirement

- Readme
- TDD, E2E
- A good & consistent folder structure
- Code style (Automate with lints)
- readability, Justification

### Things to think about

- API cache at bff
- Think from Multi region redundancy
- GeoBalancing
- Dynamic IAC with Terraform

### Stretch

- RUM with DataDog
- CanIUse benchmarks at precommit for wider browser support ?
- Light house benchmarking

### Tech Stack 1 (cons - Complicated SEO 🤷🏻‍♂️)

- **Backend**: Node.js with Express
- **Frontend**: React
- **Testing**: Jest
- **Containerization**: Docker
- **Infrastructure as Code**: Terraform
- **Cloud Provider**: AWS
- **CI/CD**: GitHub Actions

### Tech Stack 2 (Cons - Personal New Learning Curve for Next.js)

- **Frontend/Backend**: Next.js (React Framework) - I'd rather abandon a BFF with Next.js, I would explore BFF if i have to do content Aggregation, In this case NewsAPi Already does that. Plus my initial thought process on caching this is heavy lifted by Next Build In already.
- **Testing**: Jest
- **Containerization**: Docker, k8
- **Infrastructure as Code**: Terraform
- **Cloud Provider**: AWS
- **CI/CD**: GitHub Actions

**Conclusion**:- Go with Tech Stack 2, Next is really cool, I make this exercise easy Particularly Data fetching and Caching stuff is made easy. There is a reference folder structure by design default.
s
