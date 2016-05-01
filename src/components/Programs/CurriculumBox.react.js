import React, { Component } from 'react';
import {TransparencyCardsList} from 'components';

export default class CurriculumBox extends Component {

    render() {
        console.log("All props from CurriculumBox ", this.props);
        var curriculumsCards = 
              <TransparencyCardsList
                location={this.props.location}
                cards={this.props.programsInfo.curriculums}
                cardRow={1}
                unevenRow='true'/> ;
        return (
            <div>
                <div className="row">
                    {curriculumsCards}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quibusdam totam fugiat, officiis numquam fugit impedit laborum ipsam esse voluptatem doloribus labore sunt reiciendis libero, quo omnis aliquam? Qui, odio.
                </div>
            </div>
        );
    }
}

