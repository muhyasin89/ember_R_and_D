import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  model() {
    return {
      general: [
        {
          dealer_name: 'PT Trans Indo Utama - Tebing Tinggi',
          cms_dealer_id: '7530',
          ACCEPTED: 11,
          DRAFT: 16,
          CANCELLED_BY_CUSTOMER: 23,
          CANCELLED: 39,
          SENT: 1,
        },
        {
          dealer_name:
            'PT Indomobil Prima Niaga-Surabaya (PT Indosurya Perkasa Gemilang) - Jember (Indosurya Perkasa Gemilang)',
          cms_dealer_id: '7532',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 1,
          SENT: 0,
        },
        {
          dealer_name:
            'PT Indomobil Cahaya Prima (PT Timor Transindo Pratama) - Ruteng',
          cms_dealer_id: '7533',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 1,
          CANCELLED: 0,
          SENT: 0,
        },
        {
          dealer_name: 'PT Catur Kokoh Mobil Nasional - Tulungagung',
          cms_dealer_id: '7534',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 1,
          SENT: 0,
        },
        {
          dealer_name: 'PT Persada Palembang Raya - PUSRI',
          cms_dealer_id: '7535',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 0,
          SENT: 1,
        },
        {
          dealer_name: 'PT Bypassindo Jaya Indah - Jakarta',
          cms_dealer_id: '7543',
          ACCEPTED: 0,
          DRAFT: 1,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 0,
          SENT: 0,
        },
        {
          dealer_name: 'PT Hibaindo Armada Motor Cakung - Jakarta Timur',
          cms_dealer_id: '7544',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 1,
          CANCELLED: 0,
          SENT: 0,
        },
        {
          dealer_name: 'PT Persada Palembang Raya - Baturaja',
          cms_dealer_id: '7562',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 1,
          SENT: 0,
        },
        {
          dealer_name: 'PT Hino Motors Sales Indonesia - Tangerang',
          cms_dealer_id: '7654',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 2,
          CANCELLED: 0,
          SENT: 0,
        },
        {
          dealer_name: 'PT Hudaya Maju Mandiri - Nanggewer',
          cms_dealer_id: '7655',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 2,
          SENT: 0,
        },
        {
          dealer_name: 'PT Hudaya Maju Mandiri - Cibitung',
          cms_dealer_id: '7656',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 1,
          SENT: 0,
        },
        {
          dealer_name: 'PT Hibaindo Armada Motor - Cakung',
          cms_dealer_id: '7660',
          ACCEPTED: 1,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 0,
          SENT: 0,
        },
        {
          dealer_name: 'PT Daya Guna Motor Indonesia - Jakarta - Kelapa Gading',
          cms_dealer_id: '7663',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 1,
          CANCELLED: 0,
          SENT: 0,
        },
        {
          dealer_name: 'PT Bypassindo Jaya Indah - Narogong',
          cms_dealer_id: '7666',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 1,
          CANCELLED: 0,
          SENT: 0,
        },
        {
          dealer_name: 'PT Armindo Perkasa - Cirebon',
          cms_dealer_id: '7669',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 1,
          CANCELLED: 0,
          SENT: 0,
        },
        {
          dealer_name: 'PT Armindo Perkasa - Ciputat',
          cms_dealer_id: '7670',
          ACCEPTED: 1,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 0,
          SENT: 0,
        },
        {
          dealer_name: 'PT Armindo Perkasa - Ciawi',
          cms_dealer_id: '7672',
          ACCEPTED: 0,
          DRAFT: 1,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 0,
          SENT: 0,
        },
      ],
      filter: [
        {
          dealer_name: 'PT Trans Indo Utama - Tebing Tinggi',
          cms_dealer_id: '7530',
          ACCEPTED: 11,
          DRAFT: 16,
          CANCELLED_BY_CUSTOMER: 23,
          CANCELLED: 39,
          SENT: 1,
        },
        {
          dealer_name:
            'PT Indomobil Prima Niaga-Surabaya (PT Indosurya Perkasa Gemilang) - Jember (Indosurya Perkasa Gemilang)',
          cms_dealer_id: '7532',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 1,
          SENT: 0,
        },
        {
          dealer_name:
            'PT Indomobil Cahaya Prima (PT Timor Transindo Pratama) - Ruteng',
          cms_dealer_id: '7533',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 1,
          CANCELLED: 0,
          SENT: 0,
        },
        {
          dealer_name: 'PT Catur Kokoh Mobil Nasional - Tulungagung',
          cms_dealer_id: '7534',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 1,
          SENT: 0,
        },
        {
          dealer_name: 'PT Persada Palembang Raya - PUSRI',
          cms_dealer_id: '7535',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 0,
          SENT: 1,
        },
        {
          dealer_name: 'PT Bypassindo Jaya Indah - Jakarta',
          cms_dealer_id: '7543',
          ACCEPTED: 0,
          DRAFT: 1,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 0,
          SENT: 0,
        },
        {
          dealer_name: 'PT Hibaindo Armada Motor Cakung - Jakarta Timur',
          cms_dealer_id: '7544',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 1,
          CANCELLED: 0,
          SENT: 0,
        },
        {
          dealer_name: 'PT Persada Palembang Raya - Baturaja',
          cms_dealer_id: '7562',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 1,
          SENT: 0,
        },
        {
          dealer_name: 'PT Hino Motors Sales Indonesia - Tangerang',
          cms_dealer_id: '7654',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 2,
          CANCELLED: 0,
          SENT: 0,
        },
        {
          dealer_name: 'PT Hudaya Maju Mandiri - Nanggewer',
          cms_dealer_id: '7655',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 2,
          SENT: 0,
        },
        {
          dealer_name: 'PT Hudaya Maju Mandiri - Cibitung',
          cms_dealer_id: '7656',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 1,
          SENT: 0,
        },
        {
          dealer_name: 'PT Hibaindo Armada Motor - Cakung',
          cms_dealer_id: '7660',
          ACCEPTED: 1,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 0,
          SENT: 0,
        },
        {
          dealer_name: 'PT Daya Guna Motor Indonesia - Jakarta - Kelapa Gading',
          cms_dealer_id: '7663',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 1,
          CANCELLED: 0,
          SENT: 0,
        },
        {
          dealer_name: 'PT Bypassindo Jaya Indah - Narogong',
          cms_dealer_id: '7666',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 1,
          CANCELLED: 0,
          SENT: 0,
        },
        {
          dealer_name: 'PT Armindo Perkasa - Cirebon',
          cms_dealer_id: '7669',
          ACCEPTED: 0,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 1,
          CANCELLED: 0,
          SENT: 0,
        },
        {
          dealer_name: 'PT Armindo Perkasa - Ciputat',
          cms_dealer_id: '7670',
          ACCEPTED: 1,
          DRAFT: 0,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 0,
          SENT: 0,
        },
        {
          dealer_name: 'PT Armindo Perkasa - Ciawi',
          cms_dealer_id: '7672',
          ACCEPTED: 0,
          DRAFT: 1,
          CANCELLED_BY_CUSTOMER: 0,
          CANCELLED: 0,
          SENT: 0,
        },
      ],
      info_page: {
        per_page: 4,
        curr_page: 1,
        max_page: 4,
        list_page: [1, 2, 3, 4],
      },
      chart: [
        {
          name: 'PT Trans Indo Utama - Tebing Tinggi',
          cms_dealer_id: 'PT Trans Indo Utama - Tebing Tinggi',
          data: [
            {
              category: 'ACCEPTED',
              value: 11,
            },
            {
              category: 'DRAFT',
              value: 16,
            },
            {
              category: 'CANCELLED_BY_CUSTOMER',
              value: 23,
            },
            {
              category: 'CANCELLED',
              value: 39,
            },
            {
              category: 'SENT',
              value: 1,
            },
          ],
        },
        {
          name: 'PT Indomobil Prima Niaga-Surabaya (PT Indosurya Perkasa Gemilang) - Jember (Indosurya Perkasa Gemilang)',
          cms_dealer_id:
            'PT Indomobil Prima Niaga-Surabaya (PT Indosurya Perkasa Gemilang) - Jember (Indosurya Perkasa Gemilang)',
          data: [
            {
              category: 'ACCEPTED',
              value: 0,
            },
            {
              category: 'DRAFT',
              value: 0,
            },
            {
              category: 'CANCELLED_BY_CUSTOMER',
              value: 0,
            },
            {
              category: 'CANCELLED',
              value: 1,
            },
            {
              category: 'SENT',
              value: 0,
            },
          ],
        },
        {
          name: 'PT Indomobil Cahaya Prima (PT Timor Transindo Pratama) - Ruteng',
          cms_dealer_id:
            'PT Indomobil Cahaya Prima (PT Timor Transindo Pratama) - Ruteng',
          data: [
            {
              category: 'ACCEPTED',
              value: 0,
            },
            {
              category: 'DRAFT',
              value: 0,
            },
            {
              category: 'CANCELLED_BY_CUSTOMER',
              value: 1,
            },
            {
              category: 'CANCELLED',
              value: 0,
            },
            {
              category: 'SENT',
              value: 0,
            },
          ],
        },
        {
          name: 'PT Catur Kokoh Mobil Nasional - Tulungagung',
          cms_dealer_id: 'PT Catur Kokoh Mobil Nasional - Tulungagung',
          data: [
            {
              category: 'ACCEPTED',
              value: 0,
            },
            {
              category: 'DRAFT',
              value: 0,
            },
            {
              category: 'CANCELLED_BY_CUSTOMER',
              value: 0,
            },
            {
              category: 'CANCELLED',
              value: 1,
            },
            {
              category: 'SENT',
              value: 0,
            },
          ],
        },
        {
          name: 'PT Persada Palembang Raya - PUSRI',
          cms_dealer_id: 'PT Persada Palembang Raya - PUSRI',
          data: [
            {
              category: 'ACCEPTED',
              value: 0,
            },
            {
              category: 'DRAFT',
              value: 0,
            },
            {
              category: 'CANCELLED_BY_CUSTOMER',
              value: 0,
            },
            {
              category: 'CANCELLED',
              value: 0,
            },
            {
              category: 'SENT',
              value: 1,
            },
          ],
        },
        {
          name: 'PT Bypassindo Jaya Indah - Jakarta',
          cms_dealer_id: 'PT Bypassindo Jaya Indah - Jakarta',
          data: [
            {
              category: 'ACCEPTED',
              value: 0,
            },
            {
              category: 'DRAFT',
              value: 1,
            },
            {
              category: 'CANCELLED_BY_CUSTOMER',
              value: 0,
            },
            {
              category: 'CANCELLED',
              value: 0,
            },
            {
              category: 'SENT',
              value: 0,
            },
          ],
        },
        {
          name: 'PT Hibaindo Armada Motor Cakung - Jakarta Timur',
          cms_dealer_id: 'PT Hibaindo Armada Motor Cakung - Jakarta Timur',
          data: [
            {
              category: 'ACCEPTED',
              value: 0,
            },
            {
              category: 'DRAFT',
              value: 0,
            },
            {
              category: 'CANCELLED_BY_CUSTOMER',
              value: 1,
            },
            {
              category: 'CANCELLED',
              value: 0,
            },
            {
              category: 'SENT',
              value: 0,
            },
          ],
        },
        {
          name: 'PT Persada Palembang Raya - Baturaja',
          cms_dealer_id: 'PT Persada Palembang Raya - Baturaja',
          data: [
            {
              category: 'ACCEPTED',
              value: 0,
            },
            {
              category: 'DRAFT',
              value: 0,
            },
            {
              category: 'CANCELLED_BY_CUSTOMER',
              value: 0,
            },
            {
              category: 'CANCELLED',
              value: 1,
            },
            {
              category: 'SENT',
              value: 0,
            },
          ],
        },
        {
          name: 'PT Hino Motors Sales Indonesia - Tangerang',
          cms_dealer_id: 'PT Hino Motors Sales Indonesia - Tangerang',
          data: [
            {
              category: 'ACCEPTED',
              value: 0,
            },
            {
              category: 'DRAFT',
              value: 0,
            },
            {
              category: 'CANCELLED_BY_CUSTOMER',
              value: 2,
            },
            {
              category: 'CANCELLED',
              value: 0,
            },
            {
              category: 'SENT',
              value: 0,
            },
          ],
        },
        {
          name: 'PT Hudaya Maju Mandiri - Nanggewer',
          cms_dealer_id: 'PT Hudaya Maju Mandiri - Nanggewer',
          data: [
            {
              category: 'ACCEPTED',
              value: 0,
            },
            {
              category: 'DRAFT',
              value: 0,
            },
            {
              category: 'CANCELLED_BY_CUSTOMER',
              value: 0,
            },
            {
              category: 'CANCELLED',
              value: 2,
            },
            {
              category: 'SENT',
              value: 0,
            },
          ],
        },
        {
          name: 'PT Hudaya Maju Mandiri - Cibitung',
          cms_dealer_id: 'PT Hudaya Maju Mandiri - Cibitung',
          data: [
            {
              category: 'ACCEPTED',
              value: 0,
            },
            {
              category: 'DRAFT',
              value: 0,
            },
            {
              category: 'CANCELLED_BY_CUSTOMER',
              value: 0,
            },
            {
              category: 'CANCELLED',
              value: 1,
            },
            {
              category: 'SENT',
              value: 0,
            },
          ],
        },
        {
          name: 'PT Hibaindo Armada Motor - Cakung',
          cms_dealer_id: 'PT Hibaindo Armada Motor - Cakung',
          data: [
            {
              category: 'ACCEPTED',
              value: 1,
            },
            {
              category: 'DRAFT',
              value: 0,
            },
            {
              category: 'CANCELLED_BY_CUSTOMER',
              value: 0,
            },
            {
              category: 'CANCELLED',
              value: 0,
            },
            {
              category: 'SENT',
              value: 0,
            },
          ],
        },
        {
          name: 'PT Daya Guna Motor Indonesia - Jakarta - Kelapa Gading',
          cms_dealer_id:
            'PT Daya Guna Motor Indonesia - Jakarta - Kelapa Gading',
          data: [
            {
              category: 'ACCEPTED',
              value: 0,
            },
            {
              category: 'DRAFT',
              value: 0,
            },
            {
              category: 'CANCELLED_BY_CUSTOMER',
              value: 1,
            },
            {
              category: 'CANCELLED',
              value: 0,
            },
            {
              category: 'SENT',
              value: 0,
            },
          ],
        },
        {
          name: 'PT Bypassindo Jaya Indah - Narogong',
          cms_dealer_id: 'PT Bypassindo Jaya Indah - Narogong',
          data: [
            {
              category: 'ACCEPTED',
              value: 0,
            },
            {
              category: 'DRAFT',
              value: 0,
            },
            {
              category: 'CANCELLED_BY_CUSTOMER',
              value: 1,
            },
            {
              category: 'CANCELLED',
              value: 0,
            },
            {
              category: 'SENT',
              value: 0,
            },
          ],
        },
        {
          name: 'PT Armindo Perkasa - Cirebon',
          cms_dealer_id: 'PT Armindo Perkasa - Cirebon',
          data: [
            {
              category: 'ACCEPTED',
              value: 0,
            },
            {
              category: 'DRAFT',
              value: 0,
            },
            {
              category: 'CANCELLED_BY_CUSTOMER',
              value: 1,
            },
            {
              category: 'CANCELLED',
              value: 0,
            },
            {
              category: 'SENT',
              value: 0,
            },
          ],
        },
        {
          name: 'PT Armindo Perkasa - Ciputat',
          cms_dealer_id: 'PT Armindo Perkasa - Ciputat',
          data: [
            {
              category: 'ACCEPTED',
              value: 1,
            },
            {
              category: 'DRAFT',
              value: 0,
            },
            {
              category: 'CANCELLED_BY_CUSTOMER',
              value: 0,
            },
            {
              category: 'CANCELLED',
              value: 0,
            },
            {
              category: 'SENT',
              value: 0,
            },
          ],
        },
        {
          name: 'PT Armindo Perkasa - Ciawi',
          cms_dealer_id: 'PT Armindo Perkasa - Ciawi',
          data: [
            {
              category: 'ACCEPTED',
              value: 0,
            },
            {
              category: 'DRAFT',
              value: 1,
            },
            {
              category: 'CANCELLED_BY_CUSTOMER',
              value: 0,
            },
            {
              category: 'CANCELLED',
              value: 0,
            },
            {
              category: 'SENT',
              value: 0,
            },
          ],
        },
      ],
    };
  },
});
