import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { GlobalModule } from '../global.module';

export default {
    component: ButtonComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, GlobalModule],
        }),
    ],
    title: 'Components/Global/Button',
} as Meta;

const Template: Story<ButtonComponent> = args => ({
    props: {
        ...args
    },
});

export const Quest = Template.bind({});
Quest.args = {
    buttonOptions: {
        href: "/random",
        disabled: false,
        type: { pictured: { path: "/assets/landing/button_pve_wip.png", content: {text: "Quest", fontSize: "60px"}} }
    }
};


export const Arena = Template.bind({});
Arena.args = {
    buttonOptions: {
        href: "/random",
        disabled: false,
        type: { pictured: { path: "/assets/landing/button_pvp_wip.png", content: {text: "Arena", fontSize: "60px"}} }
    }
};