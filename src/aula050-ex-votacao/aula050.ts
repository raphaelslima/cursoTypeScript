type VotationOption = {
  numberOfvotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public detail: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfvotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotation(): void {
    for (const votation of this.votations) {
      console.log(votation.detail);
      for (const votationOption of votation.votationOptions) {
        console.log(
          `${votationOption.option}: ${votationOption.numberOfvotes}`,
        );
      }
    }
  }
}

const votation1 = new Votation('Qual sua linguagem de prog favorita?');
votation1.addVotationOption({ option: 'JS', numberOfvotes: 0 });
votation1.addVotationOption({ option: 'TS', numberOfvotes: 0 });
votation1.addVotationOption({ option: 'Python', numberOfvotes: 0 });
votation1.addVotationOption({ option: 'PHP', numberOfvotes: 0 });

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votation1.vote(1);
votationApp.showVotation();
