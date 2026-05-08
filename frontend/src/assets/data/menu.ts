import { MenuItem } from "primeng/api";

export class AppMenuItem {
  menu: MenuItem[] = [
    {
      label: 'ภาพรวม',
      path: '/dashboard',
      routerLink: ['/dashboard'],
    },
    {
      label: 'ห้องตรวจโรคฉุกเฉิน',
      path: '/emergency-room',
      items: [
        { label: 'ผู้ป่วยทั้งหมด', icon: 'pi pi-fw pi-id-card', routerLink: ['/emergency-room/visit'] },
        { label: 'ผู้ป่วยตามเพศ', icon: 'pi pi-fw pi-id-card', routerLink: ['/emergency-room/gender'] },
      ]
    },
     {
      label: 'ห้องคลอด',
      icon: 'pi pi-fw pi-briefcase',
      path: '/pages',
      items: [
        {
          label: 'Crud',
          icon: 'pi pi-fw pi-pencil',
          routerLink: ['/pages/crud']
        },
      ]
    },
    {
      label: 'หอผู้ป่วยใน',
      path: '/hierarchy',
      items: [
        {
          label: 'Submenu 1',
          icon: 'pi pi-fw pi-bookmark',
          path: '/hierarchy/submenu_1',
          items: [
            {
              label: 'Submenu 1.1',
              icon: 'pi pi-fw pi-bookmark',
              path: '/hierarchy/submenu_1/submenu_1_1',
              items: [
                { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
              ]
            },
            {
              label: 'Submenu 1.2',
              icon: 'pi pi-fw pi-bookmark',
              path: '/hierarchy/submenu_1/submenu_1_2',
              items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
            }
          ]
        },
        {
          label: 'Submenu 2',
          icon: 'pi pi-fw pi-bookmark',
          path: '/hierarchy/submenu_2',
          items: [
            {
              label: 'Submenu 2.1',
              icon: 'pi pi-fw pi-bookmark',
              path: '/hierarchy/submenu_2/submenu_2_1',
              items: [
                { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
              ]
            },
            {
              label: 'Submenu 2.2',
              icon: 'pi pi-fw pi-bookmark',
              path: '/hierarchy/submenu_2/submenu_2_2',
              items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
            }
          ]
        }
      ]
    },
    {
      label: 'หอผู้ป่วยนอก',
      items: [
        {
          label: 'Submenu 1',
          icon: 'pi pi-fw pi-bookmark',
          path: '/hierarchy/submenu_1',
          items: [
            {
              label: 'Submenu 1.1',
              icon: 'pi pi-fw pi-bookmark',
              path: '/hierarchy/submenu_1/submenu_1_1',
              items: [
                { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
              ]
            },
            {
              label: 'Submenu 1.2',
              icon: 'pi pi-fw pi-bookmark',
              path: '/hierarchy/submenu_1/submenu_1_2',
              items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
            }
          ]
        },
        {
          label: 'Submenu 2',
          icon: 'pi pi-fw pi-bookmark',
          path: '/hierarchy/submenu_2',
          items: [
            {
              label: 'Submenu 2.1',
              icon: 'pi pi-fw pi-bookmark',
              path: '/hierarchy/submenu_2/submenu_2_1',
              items: [
                { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
              ]
            },
            {
              label: 'Submenu 2.2',
              icon: 'pi pi-fw pi-bookmark',
              path: '/hierarchy/submenu_2/submenu_2_2',
              items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
            }
          ]
        }
      ]
    }
  ];
}
