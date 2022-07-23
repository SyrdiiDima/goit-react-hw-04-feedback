import  { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedBackOptions from "./FeedBackOptions/FeedBackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickButton = e => {
    const buttonName = e.target.name;

    this.setState((prevState) => ({
      [buttonName]: prevState[buttonName] + 1,
    }));
  }

  countTotalFeedback() {
    let total = 0;
    for (const i in this.state) {
      total = total + this.state[i];
    }
    return total;
  }

  countPositiveFeedbackPercentage() {
    let total = 0;
    for (const i in this.state) {
      total = total + this.state[i];
    }

    let rate = Math.round((this.state.good * 100) / total);
    return rate;
  }

  render() {
    return (
      <div>
        <Section title="Please leave a feedback">
          <FeedBackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClickButton}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}