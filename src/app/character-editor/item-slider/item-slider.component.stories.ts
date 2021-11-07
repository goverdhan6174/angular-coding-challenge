/* THIS COMPONENT NEEDS SOME WORK */

import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ItemSliderComponent } from './item-slider.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';
import { HttpClientModule } from '@angular/common/http';
import { CharacterEditorModule } from '../character-editor.module';


export default {
    component: ItemSliderComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, CharacterEditorModule,
                HttpClientModule,
                AngularSvgIconModule.forRoot(),
                AngularSvgIconPreloaderModule.forRoot({ configUrl: "/assets/icons.json" })],
        }),
    ],
    title: 'Components/ItemSlider/MyCodingChallenge',
} as Meta;


const Template: Story<ItemSliderComponent> = args => ({
    props: {
        ...args
    },
});

export const Default = Template.bind({});

Default.args = {};
