import * as _ from 'lodash';
import * as React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export interface QuestionProps {
    prompt: string;
    answer: React.ReactNode;
    shouldDisplayExpanded: boolean;
}

interface QuestionState {
    isExpanded: boolean;
}

export class Question extends React.Component<QuestionProps, QuestionState> {
    constructor(props: QuestionProps) {
        super(props);
        this.state = {
            isExpanded: props.shouldDisplayExpanded,
        };
    }
    public render() {
        return (
            <div
                className="py1"
            >
                <Card
                    style={{backgroundColor: '#312450', border: '1px solid rgb(94, 66, 166)'}}
                    initiallyExpanded={this.props.shouldDisplayExpanded}
                    onExpandChange={this.onExchangeChange.bind(this)}
                >
                    <CardHeader
                        title={this.props.prompt}
                        style={{borderBottom: this.state.isExpanded ? '1px solid rgb(94, 66, 166)' : 'none'}}
                        titleStyle={{color: '#d4d3d3'}}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true}>
                        <div style={{lineHeight: 1.4, color: '#d4d3d3'}}>
                            {this.props.answer}
                        </div>
                    </CardText>
                </Card>
            </div>
        );
    }
    private onExchangeChange() {
        this.setState({
            isExpanded: !this.state.isExpanded,
        });
    }
}
