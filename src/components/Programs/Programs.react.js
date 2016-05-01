import React, { Component } from 'react';
//var CurriculumBox = require('./CurriculumBox.react');
import CurriculumBox from './CurriculumBox.react';

export default class Programs extends Component {

    goToChangeInCurriculum () {
       $('html, body').animate({
           scrollTop: $("#changeInCurriculum").offset().top - 100
        }, 500);
    }
    
    render() {
        return (
            <div>
                <div>
                    Elit cumque numquam dicta rerum necessitatibus odio. Cupiditate aut sunt!
                    <CurriculumBox  {...this.props } />
                </div>
            </div>
        );
    }
}

