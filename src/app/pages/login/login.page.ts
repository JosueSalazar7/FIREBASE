1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonicModule, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:true,
  imports:[IonicModule,FormsModule,ReactiveFormsModule],
})
export class LoginPage implements OnInit {
  credentials!:FormGroup;
  constructor(
  private fb: FormBuilder,
  private loadController: LoadingController,
  private alertController: AlertController,
  private router: Router,
  private authService: AuthService,
  private toastCtrl: ToastController,
  ) { }
public get email(){return this.credentials.get('email')}
public get password(){return this.credentials.get('password')}

  ngOnInit() {
    this.credentials=this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.min(6)]]
    });
  }

}


