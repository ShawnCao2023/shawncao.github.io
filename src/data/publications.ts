export type Publication = {
  slug: string;
  title: string;
  year: number;
  venue: string;
  url: string;
  localPaper?: string;
};

export const publications: Publication[] = [
  {
    slug: "2021-11-01-paper-title-number-2",
    title:
      "Autonomous Underwater Vehicle-Manipulator Systems Path Planning with RRTAUVMS Algorithm",
    year: 2021,
    venue: "arXiv",
    url: "https://arxiv.org/abs/2109.05208",
    localPaper: "files/rrtuvms.pdf",
  },
  {
    slug: "2021-07-01-paper-title-number-1",
    title:
      "Vehicle Longitudinal and Lateral Dynamics Modeling by Deep Neural Network",
    year: 2021,
    venue:
      "2021 IEEE International Conference on Real-time Computing and Robotics (RCAR)",
    url: "https://ieeexplore.ieee.org/document/9517624",
  },
  {
    slug: "2017-11-01-paper-title-number-1",
    title:
      "Continuous Nonsingular Terminal Sliding Mode Contouring Control of Manipulator Based on Time Delay Estimation",
    year: 2017,
    venue:
      "Proceedings of the Institution of Mechanical Engineers, Part I: Journal of Systems and Control Engineering",
    url: "https://doi.org/10.1177/0959651817731250",
  },
  {
    slug: "2017-02-01-paper-title-number-1",
    title:
      "Stability Analysis of Virtual Passive Actuator with Time Delay and Parameter Uncertainties",
    year: 2017,
    venue:
      "Proceedings of the Institution of Mechanical Engineers, Part I: Journal of Systems and Control Engineering",
    url: "https://doi.org/10.1177/0959651816683063",
  },
];
